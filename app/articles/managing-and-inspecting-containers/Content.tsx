import Alert from "@/app/components/Alert";
import Terminal from "@/app/components/Terminal";
import Link from "next/link";

function Content() {
  return (
    <article>
      <section>
        <h2>Why Manage Containers?</h2>
        <p>
          Once your containers are running, you’ll often need to inspect,
          monitor, or jump inside them to see what’s happening. Docker provides
          several powerful CLI tools to help you interact with containers just
          like you would with regular servers.
        </p>
      </section>

      <section>
        <h2>Getting Help</h2>
        <p>
          Whenever you forget a command or need to explore options, Docker has a
          built-in help system:
        </p>
        <Terminal
          data={[
            {
              command: `docker --help
docker help`,
            },
          ]}
        />

        <p>
          Both commands will show a list of available subcommands, descriptions,
          and usage examples — a great built-in manual when you’re experimenting
          with the CLI.
        </p>
      </section>

      <section>
        <h2>Starting the &quot;Getting Started&quot; Container</h2>
        <p>
          Docker provides a simple demo image called
          <code>docker/getting-started</code>. It’s great for practicing basic
          container management. Let’s run it on port <strong>3000</strong>:
        </p>
        <Terminal
          data={[
            {
              command: "docker run -d -p 3000:80 docker/getting-started",
            },
          ]}
        />
        <p>
          The <code>-d</code> flag runs it in the background (detached mode),
          and <code>-p</code> maps port 80 inside the container to port 3000 on
          your local machine.
        </p>
        <p>Once started, check if it’s running:</p>
        <Terminal
          data={[
            {
              command: "docker ps",
            },
          ]}
        />
        <p>
          You should see the container listed, showing the image name, container
          ID, and exposed ports.
        </p>
        <p>
          Open your browser and visit
          <a href="http://localhost:3000" target="_blank">
            http://localhost:3000
          </a>
          — it should display the Docker Getting Started app.
        </p>
      </section>

      <section>
        <h2>Running Commands Inside a Container</h2>
        <p>
          Containers are isolated environments — but you can still interact with
          them directly. The <code>docker exec</code> command lets you run
          commands inside an already running container:
        </p>
        <Terminal
          data={[
            {
              command: "docker exec CONTAINER_ID ls",
            },
          ]}
        />
        <p>
          That lists files inside the container’s working directory. You can
          even create new files or logs:
        </p>
        <Terminal
          data={[
            {
              command: `docker exec CONTAINER_ID touch test.log
docker exec CONTAINER_ID ls`,
            },
          ]}
        />
        <p>
          You’ll now see <code>test.log</code> appear inside the container. It’s
          a quick and safe way to experiment without restarting anything.
        </p>
      </section>

      <section>
        <h2>Inspecting What’s Running Inside</h2>
        <p>
          Wondering what web server is powering that container? You can check
          which processes are listening on which ports using:
        </p>
        <Terminal
          data={[
            {
              command: "docker exec CONTAINER_ID netstat -ltnp",
            },
          ]}
        />
        <p>
          You’ll notice that something (usually <code>nginx</code>) is bound to
          port <strong>80</strong> — that’s the process serving the webpage you
          saw earlier.
        </p>
      </section>

      <section>
        <h2>Opening an Interactive Shell</h2>
        <p>
          If you want to explore deeper, you can open a live shell session
          inside the container using <code>docker exec</code> with two special
          flags:
        </p>
        <ul>
          <li>
            <strong>-i</strong> → keeps input open for interaction
          </li>
          <li>
            <strong>-t</strong> → allocates a terminal (TTY)
          </li>
        </ul>
        <pre>docker exec -it CONTAINER_ID /bin/sh</pre>

        <Alert title="Tip:" type="neutral">
          This feels like SSH — you’re now “inside” the container’s terminal
          environment.
        </Alert>

        <p>Try navigating into the folder where the web content lives:</p>
        <Terminal
          data={[
            {
              command: "cd /usr/share/nginx/html/tutorial",
            },
          ]}
        />
        <p>
          This directory holds the files that are served by the nginx web
          server. You can modify them live. For example:
        </p>
        <Terminal
          data={[
            {
              command: 'echo "Hello from inside Docker!" > index.html',
            },
          ]}
        />
        <p>
          Now refresh{" "}
          <Link href="http://localhost:3000" target="_blank">
            http://localhost:3000
          </Link>{" "}
          — you should see your custom message! When done, exit with:
        </p>
        <Terminal
          data={[
            {
              command: "exit",
            },
          ]}
        />
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li><code>docker help</code> shows available commands</li>
          <li>
            <code>docker run -d -p 3000:80 docker/getting-started</code> runs a
            test container
          </li>
          <li><code>docker ps</code> lists active containers</li>
          <li>
            <code>docker exec</code> lets you run commands or open a live shell
          </li>
          <li><code>netstat</code> helps inspect what’s running inside</li>
          <li>
            You can safely modify files inside a container in real time — great
            for learning or debugging
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Content;
