import Alert from "@/app/components/Alert";
import Terminal from "@/app/components/Terminal";

function Content() {
  return (
    <article>
      <section>
        <h2>Why Volumes Matter</h2>

        <p>
          Docker containers are <strong>temporary</strong> by nature. When a
          container is removed, everything inside it — data, logs, and
          configurations — disappears. Think of it as wiping a computer
          completely clean every time it’s shut down.
        </p>

        <p>
          This behavior works fine for lightweight applications, but it’s a
          problem for anything that needs to store information — like a{" "}
          <strong>PostgreSQL</strong> database. You wouldn’t want your data to
          vanish every time you restart your app!
        </p>

        <p>
          To solve this, Docker gives us <strong>Volumes</strong> — persistent
          storage spaces managed directly by Docker. They live outside your
          container but can be accessed from inside, letting your container read
          and write data safely.
        </p>

        <Alert title="Volume Explained:">
          Think of a volume as a shared “folder” that stays alive even after
          your container is gone. It’s like plugging in a USB drive — your app
          can use it, but the data lives outside.
        </Alert>

        <p>In short, volumes:</p>
        <ul>
          <li>Keep your data safe when containers are deleted</li>
          <li>Can be shared between multiple containers</li>
          <li>Are easy to back up or migrate</li>
          <li>Behave consistently across environments</li>
        </ul>

        <p>
          In this chapter, we’ll explore how to use volumes by running a{" "}
          <strong>PostgreSQL</strong> database inside Docker — creating a table
          and saving real data that persists even after the container stops.
        </p>
      </section>

      <section>
        <h2>Creating a Volume</h2>
        <p>
          Let’s create a Docker volume that we’ll use to persist PostgreSQL
          data. Volumes are created and managed separately from containers.
        </p>
        <Terminal
          data={[{ command: "docker volume create pgdata" }]}
        ></Terminal>
        <p>You can verify it was created using:</p>
        <Terminal data={[{ command: "docker volume ls" }]}></Terminal>
        <p>And to inspect where Docker actually stores it on your system:</p>
        <Terminal
          data={[{ command: "docker volume inspect pgdata" }]}
        ></Terminal>

        <p>
          Docker automatically assigns a path under
          <code>/var/lib/docker/volumes/</code> for the volume’s data. You don’t
          need to manually set this path — just use the volume name (in this
          case <code>pgdata</code>) and Docker handles the rest.
        </p>

        <p>
          Using the volume name (e.g.
          <code>-v pgdata:/var/lib/postgresql/data</code>) tells Docker to mount
          the existing volume into the container at the specified location.
        </p>
      </section>

      <section>
        <h2>Running PostgreSQL with a Volume</h2>
        <p>
          Now let’s run PostgreSQL and tell Docker to use the{" "}
          <strong>pgdata</strong> volume for data storage.
        </p>

        <Terminal
          data={[
            {
              command: `docker run -d \\
  --name pg-demo \\
  -e POSTGRES_USER=demo \\
  -e POSTGRES_PASSWORD=demo123 \\
  -e POSTGRES_DB=demo_db \\
  -v pgdata:/var/lib/postgresql/data \\
  -p 5432:5432 \\
  postgres`,
            },
          ]}
        />

        <br></br>
        <ul>
          <li>
            <strong>-v pgdata:/var/lib/postgresql/data</strong> → mounts our
            named volume inside the container
          </li>
          <li>
            <strong>-e</strong> flags → set PostgreSQL credentials and database
            name
          </li>
          <li>
            <strong>-p 5432:5432</strong> → maps the container’s PostgreSQL port
            to your local machine
          </li>
        </ul>

        <div className="border border-yellow-200/60 bg-yellow-50 text-yellow-900 rounded-xl p-5 leading-relaxed shadow-sm mt-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">⚠️</span>
            <strong className="font-semibold text-yellow-900">
              Common Issues When Running PostgreSQL in Docker
            </strong>
          </div>

          <div className="space-y-8 text-sm">
            {/* Issue 1 */}
            <div>
              <strong className="block font-medium mb-2">
                1. Port Already in Use
              </strong>
              <p>
                If you already have PostgreSQL running on your system, you’ll
                see an error like:
              </p>

              <Terminal
                data={[
                  {
                    command:
                      "ports are not available: listen tcp 0.0.0.0:5432: bind: address already in use",
                  },
                ]}
              />

              <p className="mt-3">
                To temporarily stop your host PostgreSQL service:
              </p>
              <Terminal
                data={[{ command: "sudo systemctl stop postgresql" }]}
              />

              <p className="mt-3">
                After you finish testing Docker, you can restart it:
              </p>
              <Terminal
                data={[{ command: "sudo systemctl start postgresql" }]}
              />
            </div>

            {/* Issue 2 */}
            <div>
              <strong className="block font-medium mb-2">
                2. Container Name Conflict
              </strong>
              <p>If you see an error like:</p>

              <Terminal
                data={[
                  {
                    command: `Conflict. The container name "/pg-demo" is already in use ...`,
                  },
                ]}
              />

              <p className="mt-3">
                This means a container with that name already exists. To fix:
              </p>

              <Terminal
                data={[
                  {
                    command: `# List all containers (including stopped)
docker ps -a`,
                  },
                  {
                    command: `# Remove the conflicting container
docker rm pg-demo`,
                  },
                ]}
              />

              <p className="mt-3">Then you can run your container again</p>
            </div>
          </div>
        </div>

        <p>You can now connect to the running PostgreSQL container using:</p>
        <Terminal
          data={[
            { command: "docker exec -it pg-demo psql -U demo -d demo_db" },
          ]}
        />
      </section>

      <section>
        <h2>Creating a Simple Table</h2>
        <p>
          Let’s create a simple table and insert a record inside PostgreSQL:
        </p>
        <Terminal
          data={[
            {
              command: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100)
);

INSERT INTO users (name, email)
VALUES ('Alice', 'alice@example.com');

SELECT * FROM users;`,
            },
          ]}
        />

        <p>
          You should see one row returned. This data is stored in the volume,
          not inside the temporary container filesystem.
        </p>
      </section>

      <section>
        <h2>Test Data Persistence</h2>
        <p>
          Let’s test if our volume really persists data after the container is
          removed.
        </p>
        <Terminal
          data={[
            {
              command: `# Stop and remove the container
docker stop pg-demo
docker rm pg-demo

# Start a new container using the same volume
docker run -d \\
  --name pg-demo-2 \\
  -e POSTGRES_USER=demo \\
  -e POSTGRES_PASSWORD=demo123 \\
  -e POSTGRES_DB=demo_db \\
  -v pgdata:/var/lib/postgresql/data \\
  -p 5432:5432 \\
  postgres`,
            },
          ]}
        />

        <p>Connect again to the new container:</p>
        <Terminal
          data={[
            { command: "docker exec -it pg-demo-2 psql -U demo -d demo_db" },
          ]}
        />

        <p>Run:</p>

        <Terminal data={[{ command: "SELECT * FROM users;" }]} />
        <p>
          🎉 You should still see Alice in the table — meaning your data was
          preserved by the volume!
        </p>
      </section>

      <section>
        <h2>Clean Up</h2>
        <p>
          Once you’re done experimenting, you can clean up the containers and
          volumes to free space:
        </p>
        <Terminal
          data={[
            {
              command: `# Stop and remove containers
docker ps -a
docker stop pg-demo-2
docker rm pg-demo-2

# Remove volume
docker volume ls
docker volume rm pgdata`,
            },
          ]}
        />

        <p>
          Remember, removing the volume deletes all the data permanently — use
          this only when you no longer need the database.
        </p>
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>
            Containers are stateless — data disappears when they’re removed.
          </li>
          <li>Volumes let containers store and retrieve persistent data.</li>
          <li>
            Volumes live outside of containers but can be mounted inside them.
          </li>
          <li>
            Using PostgreSQL is a great example: you can restart containers
            without losing your data.
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Content;
