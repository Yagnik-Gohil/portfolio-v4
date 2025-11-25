import CodeBlock from "@/app/components/CodeBlock";
import Terminal from "@/app/components/Terminal";
import Image from "next/image";

function Content() {
  return (
    <article>
      <section>
        <h2>Why Docker Networking Matters</h2>
        <p>
          Containers don’t automatically know about each other. If you run three
          isolated services:
        </p>
        <Terminal
          data={[
            { command: "docker run node1" },
            { command: "docker run node2" },
            { command: "docker run nginx" },
          ]}
        />
        <p>They are like strangers living on the same street.</p>
        <ul>
          <li>They share the same system</li>
          <li>But have no idea the others exist</li>
          <li>They can’t talk to each other</li>
        </ul>
        <p>
          To solve this, Docker provides{" "}
          <strong>user-defined bridge networks</strong>, which allow
          communication inside Docker without exposing containers to the outside
          world.
        </p>
      </section>
      <section>
        <h2>Part 1: Writing a Minimal Node HTTP Server</h2>
        <p>
          Each backend server will respond with HTML page that identifies
          itself.
        </p>
        <p>Create a folder docker-lb-example</p>
        <Terminal
          data={[
            {
              command: `mkdir docker-lb-example
cd docker-lb-example
touch server.js`,
            },
          ]}
        />
        <p>inside it create server.js</p>
        <CodeBlock
          code={`const http = require("http");
const os = require("os");

const PORT = process.env.PORT || 3000;
const SERVER_NAME = process.env.SERVER_NAME || os.hostname();

const server = http.createServer((req, res) => {
  const hostname = os.hostname();
  const time = new Date().toISOString();

  const html = \`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello from \${SERVER_NAME}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #333; }
        </style>
      </head>
      <body>
        <h1>Hello from \${SERVER_NAME}</h1>
        <p><strong>Hostname:</strong> \${hostname}</p>
        <p><strong>Current Time:</strong> \${time}</p>
      </body>
    </html>
  \`;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(\`Server \${SERVER_NAME} listening on port \${PORT}\`);
});
`}
          fileName="server.js"
        />

        <p>We use:</p>
        <ul>
          <li>
            <code>SERVER_NAME</code> as an environment variable
          </li>
          <li>
            <code>os.hostname()</code> as a fallback
          </li>
          <li>Plain HTTP — no frameworks to distract from networking</li>
        </ul>
      </section>
      <section>
        <h2>Dockerizing the Node App</h2>
        <p>
          Create a <code>Dockerfile</code>:
        </p>
        <CodeBlock
          code={`FROM node:18-alpine

WORKDIR /app
COPY server.js ./
EXPOSE 3000

CMD ["node", "server.js"]
`}
          fileName="Dockerfile"
        />
        <p>Build the image:</p>
        <Terminal data={[{ command: "docker build -t node-server ." }]} />
        <p>We now have a reusable container image.</p>
      </section>
      <section>
        <h2>Part 2: Creating a Private Docker Network</h2>
        <p>This network will contain all three containers.</p>
        <Terminal data={[{ command: "docker network create mynet" }]} />
        <p>Why is this important?</p>
        <ul>
          <li>
            Containers on <code>mynet</code> can talk to each other{" "}
            <strong>by name</strong>
          </li>
          <li>Docker automatically resolves container names → IPs</li>
          <li>Network is isolated from everything else</li>
        </ul>
        <p>Production infrastructure relies heavily on this pattern.</p>
      </section>
      <section>
        <h2>Part 3: Starting Two Node Backend Servers</h2>
        <p>
          We’ll run two containers from the same image, each with a different
          identity.
        </p>
        <Terminal
          data={[
            {
              command: `docker run -d \\
  --name node1 \\
  --network mynet \\
  -e SERVER_NAME="container-1" \\
  node-server
`,
            },
            {
              command: `docker run -d \\
  --name node2 \\
  --network mynet \\
  -e SERVER_NAME="container-2" \\
  node-server
`,
            },
          ]}
        />
        <p>
          There is <strong>no -p flag</strong>. These containers are not exposed
          to your host. They can only communicate{" "}
          <strong>inside the Docker network</strong>. This is how microservices
          stay private.
        </p>
      </section>
      <section>
        <h2>Part 4: Verify Connectivity Inside the Network</h2>
        <p>Spin up a temporary container:</p>
        <Terminal
          data={[{ command: "docker run -it --network mynet alpine sh" }]}
        />
        <p>Install curl:</p>
        <Terminal data={[{ command: "apk add curl" }]} />
        <p>Hit each container by name:</p>
        <Terminal
          data={[
            {
              command: `curl node1:3000
curl node2:3000`,
            },
          ]}
        />
        <p>
          You should see HTML from each. This is Docker DNS working behind the
          scenes. There is <strong>no central database</strong>. Docker resolves
          names <strong>automatically</strong>.
        </p>
      </section>
      <section>
        <h2>Part 5: Introducing nginx as a Load Balancer</h2>
        <p>
          Modern backend systems rarely rely on a single service. APIs, workers,
          and web servers often live in separate containers that communicate
          over private networks.
        </p>
        <p>
          A load balancer distributes incoming requests across multiple servers.
        </p>
        <p>We’ll use nginx because:</p>
        <ul>
          <li>It is lightweight</li>
          <li>It is production-proven</li>
          <li>It supports reverse proxying and balancing natively</li>
        </ul>
        <p>Create a file:</p>
        <CodeBlock
          fileName="nginx.conf"
          code={`events {}

http {

    upstream appservers {
        server node1:3000;
        server node2:3000;
    }

    server {
        listen 80;

        location / {
            proxy_pass http://appservers;
        }
    }
}
`}
        />
        <p>Explanation:</p>
        <ul>
          <li>
            <code>upstream</code> defines a backend pool
          </li>
          <li>
            nginx picks a server using <strong>round robin</strong> (default
            policy)
          </li>
          <li>
            Container names (<code>node1</code>, <code>node2</code>) act as
            hostnames
          </li>
        </ul>
        <p>
          No IP addresses needed. You can restart containers without breaking
          the config.
        </p>
      </section>
      <section>
        <h2>Part 6: Running the Load Balancer Container</h2>
        <p>Launch nginx attached to the same Docker network:</p>
        <Terminal
          data={[
            {
              command: `docker run -d \\
  --name nginx-lb \\
  --network mynet \\
  -p 8080:80 \\
  -v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro \\
  nginx:alpine`,
            },
          ]}
        />
        <p>
          We expose <strong>only</strong> the load balancer to the host.
        </p>
        <p>Traffic flow becomes: Browser → nginx-lb → node1 or node2</p>
      </section>
      <section>
        <h2>Part 7: Test It</h2>
        <p>From your host:</p>

        <Terminal data={[{ command: "curl http://localhost:8080" }]} />
        <p>
          Run it a few times and you can see it serves content from both
          containers. This demonstrates round-robin balancing.
        </p>
        <h2>What You Just Built</h2>

        <Image
          src="https://d21r3yo3pas5u.cloudfront.net/thumbnail/nginx-lb.webp"
          alt="LOad Balancing"
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-2xl"
          priority
          unoptimized
        />
        <p>A real-world production pattern:</p>
        <ul>
          <li>Public entry (nginx)</li>
          <li>Private microservices (node1, node2)</li>
          <li>Internal communication only</li>
        </ul>
      </section>
      <section>
        <h2>Why This Matters</h2>
        <p>
          <strong>1. Security</strong>
        </p>
        <ul>
          <li>Only one public “door”.</li>
          <li>Nodes are private.</li>
        </ul>
        <p>
          <strong>2. Scalability</strong>
        </p>
        <ul>
          <li>Want 10 servers? Just run more backend containers.</li>
        </ul>
        <p>
          <strong>3. Fault tolerance</strong>
        </p>
        <ul>
          <li>If node1 fails: nginx automatically routes to node2</li>
        </ul>
        <p>
          <strong>4. Portable architecture</strong>
        </p>
        <p>Same design works on:</p>
        <ul>
          <li>AWS ECS</li>
          <li>Kubernetes</li>
          <li>Docker Swarm</li>
          <li>Bare-metal servers</li>
        </ul>
      </section>
      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li><strong>Containers do not communicate by default</strong> — they are isolated environments unless you explicitly connect them through networks.</li>
          <li><strong>User-defined Docker networks enable private container communication</strong>, letting services talk to each other securely without exposing ports.</li>
          <li><strong>Docker DNS resolves container names automatically</strong>, so services can reference each other using names like <code>node1</code> or <code>node2</code> instead of IP addresses.</li>
          <li><strong>Backend services should stay private</strong> — we never exposed <code>node1</code> or <code>node2</code> to the host, only the load balancer.</li>
          <li><strong>nginx acts as a gateway</strong>, receiving public requests and forwarding them to backend containers using reverse-proxy rules.</li>
          <li><strong>Round-robin balancing happens automatically in nginx</strong>, allowing requests to be distributed evenly without custom logic.</li>
          <li><strong>Scaling is trivial</strong> — you can launch more containers on the same network, and nginx will route traffic to them.</li>
          <li><strong>This architecture mirrors real-world infrastructure</strong> used in Kubernetes, cloud environments, and microservices systems.</li>
        </ul>
      </section>
    </article>
  );
}

export default Content;
