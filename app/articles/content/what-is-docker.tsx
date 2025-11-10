import Alert from "@/app/components/Alert";
import Terminal from "@/app/components/Terminal";
import Link from "next/link";

function Content() {
  return (
    <article>
      <section>
        <h2> What Even Is Docker?</h2>
        <p>
          Docker is the tool that made “containerization” the standard way to
          ship and run applications. In simple terms, it allows developers to
          pack up their app along with its entire environment — code, libraries,
          configs, and dependencies — into a neat portable unit called a{" "}
          <strong>container</strong>.
        </p>
        <p>
          Imagine sending your project to a friend and being 100% sure it’ll run
          exactly the same way on their computer, no matter what operating
          system or setup they have. That’s the magic of Docker.
        </p>
      </section>

      <section>
        <h2>How Docker Works</h2>
        <p>
          Docker revolves around two main building blocks:{" "}
          <strong>images</strong> and <strong>containers</strong>.
        </p>
        <ul>
          <li>
            An <strong>image</strong> is like a blueprint — it defines what goes
            inside the container: the OS, dependencies, files, and commands to
            run.
          </li>
          <li>
            A <strong>container</strong> is a running instance of that image —
            an isolated environment where your app lives.
          </li>
        </ul>
        <p>
          Think of images as “recipes” and containers as “dishes” cooked from
          those recipes. You can spin up, stop, and destroy containers easily —
          no need for heavy virtual machines.
        </p>

        <Alert title="Note:" type="info">
          A container is ephemeral — it can be destroyed at any time. The image
          remains unchanged and can be used to spin up new containers
          consistently.
          <span className="block mt-3 text-sm text-gray-800 font-medium italic">
            “Though your body will decay, your spirit lingers on.”
          </span>
          <span className="block mt-1 text-sm text-gray-700">
            — Professor Horace Slughorn,{" "}
            <span className="italic">
              Harry Potter and the Half-Blood Prince
            </span>
          </span>
        </Alert>
      </section>

      <section>
        <h2>Installing Docker</h2>
        <p>
          When setting up Docker locally, there are three key components to know
          about:
        </p>
        <ul>
          <li>
            <strong>Docker Daemon (Server):</strong> The background service that
            builds, runs, and manages containers.
          </li>
          <li>
            <strong>Docker Desktop:</strong> A simple graphical interface that
            starts the daemon and helps visualize containers.
          </li>
          <li>
            <strong>Docker CLI:</strong> The command-line tool that developers
            actually use to work with Docker.
          </li>
        </ul>
        <p>
          You can download Docker Desktop from the official website:{" "}
          <Link
            href="https://www.docker.com/products/docker-desktop/"
            target="_blank"
          >
            docker.com
          </Link>
        </p>
        <p>
          Once installed, ensure the Docker Daemon is running — otherwise no
          commands will respond.
        </p>
      </section>

      <section>
        <h2>Docker Hub</h2>
        <p>
          <strong>Docker Hub</strong> is the official cloud service for hosting
          and sharing Docker images. Think of it as GitHub, but for container
          images.
        </p>
        <p>For example, when you run:</p>
        <Terminal data={[{ command: "docker pull ubuntu" }]} />
        <p>
          Docker fetches the official Ubuntu image from Docker Hub. There are
          thousands of pre-built images for everything — databases, programming
          languages, and tools.
        </p>
        <p>Big cloud providers also offer their own private registries:</p>
        <ul>
          <li>AWS → Elastic Container Registry (ECR)</li>
          <li>Google Cloud → Container Registry (GCR)</li>
          <li>Azure → Container Registry (ACR)</li>
        </ul>
        <p>
          But for most projects, Docker Hub is more than enough — and it’s free
          for public images.
        </p>
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>
            Docker packages your app with everything it needs into containers.
          </li>
          <li>Images are blueprints; containers are live instances.</li>
          <li>Docker Hub is the go-to place to share and find images.</li>
          <li>Use Docker Desktop + CLI for an easy workflow.</li>
        </ul>
      </section>
    </article>
  );
}

export default Content;
