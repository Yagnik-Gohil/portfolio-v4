import Alert from "@/app/components/Alert";
import Terminal from "@/app/components/Terminal";
import Link from "next/link";

function Content() {
  return (
    <article>
      <section>
        <h2>What is a Container?</h2>
        <p>
          A container is a standard unit of software that packages code and all
          its dependencies so it runs consistently across computing
          environments.
        </p>
        <p>
          <em>-- Docker</em>
        </p>
        <p>
          Unlike virtual machines, which are slow to boot, containers start in
          seconds and are much more lightweight.
        </p>
      </section>
      <section>
        <h2>Virtual Machines vs Containers</h2>
        <p>
          Virtual machines (VMs) have been around for a long time. They run a
          full OS on top of your host machine using a hypervisor. Each VM has
          its own:
        </p>
        <ul>
          <li>Full guest operating system</li>
          <li>Allocated CPU, memory, and storage</li>
          <li>Separate system updates and configs</li>
        </ul>
        <p>
          VMs work but are resource-heavy. Containers, on the other hand, share
          the host OS kernel, keeping apps isolated while being lightweight.
        </p>
        <p>
          <strong>Advantages of Containers:</strong>
        </p>
        <ul>
          <li>Start in seconds vs minutes for VMs</li>
          <li>
            Lower resource usage — multiple containers on the same host OS
          </li>
          <li>Same behavior across environments — dev, test, production</li>
        </ul>
      </section>
      <section>
        <h2>Images vs Containers</h2>
        <p>A container is basically a running instance of an image:</p>
        <ul>
          <li>
            <strong>Image:</strong> Read-only blueprint
          </li>
          <li>
            <strong>Container:</strong> Running instance with read-write
            filesystem
          </li>
        </ul>
        <p>
          You can launch multiple containers from a single image. Think of it
          like a class (image) and objects (containers).
        </p>
      </section>

      <section>
        <h2>Pull Docker Image</h2>
        <p>Download the &quot;nginx&quot; image:</p>
        <Terminal data={[{ command: "docker pull library/nginx" }]} />
        <p>Check the images you have:</p>
        <Terminal data={[{ command: "docker images" }]} />
        <p>
          You can also see the image in Docker Desktop under the
          &quot;Images&quot; tab.
        </p>
      </section>

      <section>
        <h2>Run a Container</h2>
        <p>Start a container from an image:</p>
        <Terminal
          data={[
            {
              command:
                "docker run -d -p hostport:containerport namespace/name:tag",
            },
          ]}
        />
        <p>Meaning:</p>
        <ul>
          <li>
            <strong>-d</strong>: Run detached (in background)
          </li>
          <li>
            <strong>-p</strong>: Forward host port to container port
          </li>
          <li>
            <strong>hostport</strong>: Port on your machine
          </li>
          <li>
            <strong>containerport</strong>: Port inside container
          </li>
          <li>
            <strong>namespace/name:tag</strong>: Image and version
          </li>
        </ul>
        <p>Example:</p>

        <Terminal
          data={[
            {
              command:
                "docker run -d -p 3000:80 library/nginx:latest docker ps",
            },
          ]}
        />

        <p>
          Visit{" "}
          <Link href="http://localhost:3000" target="_blank">
            http://localhost:3000
          </Link>{" "}
          to see the running app.
        </p>
      </section>

      <section>
        <h2>Stop a Container</h2>
        <p>Two main ways to stop a container:</p>
        <ul>
          <li>
            <strong>docker stop</strong>: Sends SIGTERM, graceful shutdown
          </li>
          <li>
            <strong>docker kill</strong>: Sends SIGKILL, forceful stop
          </li>
        </ul>
        <p>Example:</p>
        <Terminal data={[{ command: "docker ps docker stop CONTAINER_ID" }]} />
        <p>Refreshing the webpage now should show the server is down.</p>
      </section>

      <section>
        <h3>Running Multiple Containers</h3>
        <p>Containers are lightweight. You can run many on the same host.</p>
        <p>
          Example: Start 2 instances of the &quot;nginx&quot; container on
          different ports:
        </p>
        <Terminal
          data={[
            { command: "docker run -d -p 3000:80 library/nginx" },
            { command: "docker run -d -p 4000:80 library/nginx" },
          ]}
        />
        <p>Open each port in the browser to verify:</p>
        <ul>
          <li>
            <Link href="http://localhost:3000" target="_blank">
              http://localhost:3000
            </Link>
          </li>
          <li>
            <Link href="http://localhost:4000" target="_blank">
              http://localhost:4000
            </Link>
          </li>
        </ul>
        <p>
          Use <code>docker ps</code> to see all running containers.
        </p>

        <Alert title="Note:">
          Each container is fully isolated. Even if multiple containers use the
          same image, changes in one container do not affect others unless you
          use shared volumes.
        </Alert>
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>
            Containers package apps and dependencies in isolated, lightweight
            environments.
          </li>
          <li>Images define containers; containers are running instances.</li>
          <li>
            Containers start fast and use fewer resources than virtual machines.
          </li>
          <li>
            You can run multiple containers from the same image simultaneously.
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Content;
