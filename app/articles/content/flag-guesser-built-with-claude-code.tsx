import Alert from "@/app/components/Alert";

function Content() {
  return (
    <article>
      <section>
        <h2>Meet Flag Guesser</h2>
        <p>
          <a
            href="https://flagguesser.yagnik.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flag Guesser
          </a>{" "}
          is a free <strong>guess the flag game</strong> you play in your
          browser. You see a flag and pick its name. That’s the core, but around
          it there are routes, hearts, timers, stamps and a passport full of
          visas to collect. No sign-up, no ads, no backend. Your progress simply
          lives in your browser.
        </p>
        <p>
          I built it with <strong>Claude Code</strong> over about two days. The
          first commit landed on 17 October 2026, and it took about 30 commits.
          This post covers why I made it, how it plays, and how it was
          designed.
        </p>
      </section>

      <section>
        <h2>Why I Built It</h2>
        <p>
          I like creating games, and I play this kind of game online. But the
          flag quizzes I’ve played all have the same feeling: a flag, a
          multiple-choice question, next. Very few features and very little
          gamification.
        </p>
        <p>
          I also like playing GeoGuessr, and I wanted my flag quiz to feel like
          an actual <em>game</em>, something with progression, a bit of
          pressure and a reason to come back. So Flag Guesser is for people like
          me: anyone who enjoys geography games and wants more than “flag + MCQ”.
        </p>
      </section>

      <section>
        <h2>How It Plays</h2>
        <p>
          There are <strong>225 flags</strong> split into{" "}
          <strong>15 levels of 15</strong>, ordered from the most recognisable
          to the least, plus a <strong>10-flag bonus level</strong>. Every flag
          keeps its true official proportions.
        </p>
        <p>
          The same flags can be played on three <strong>routes</strong>. Each
          one tests a different skill. All routes are open from the start, and
          the levels inside a route unlock one by one.
        </p>

        <h3>✈️ Tourist: can you recognise it?</h3>
        <ul>
          <li>4 options, and the flag stays visible the whole time</li>
          <li>No hearts, so you can’t fail out of a level</li>
          <li>★★★ means 15/15 within 60 seconds</li>
        </ul>

        <h3>🚆 Explorer: can you tell the neighbours apart?</h3>
        <ul>
          <li>4 options, all from the same region as the answer</li>
          <li>3 hearts, and the flag hides after 5 seconds</li>
          <li>★★★ within 75 seconds</li>
        </ul>

        <h3>🚢 Diplomat: can you remember it?</h3>
        <ul>
          <li>
            Memory mode: the flag shows alone for 3 seconds (or until you tap
            “Got it”)
          </li>
          <li>Then it hides and 6 look-alike options appear</li>
          <li>3 hearts, and no side-by-side comparison after a miss</li>
          <li>★★★ within 105 seconds</li>
        </ul>
        <p>
          The wrong options are not random. Each country has curated
          look-alike flags and names (think Chad and Romania, or Indonesia and
          Monaco), so the harder the route, the trickier the options.
        </p>
        <p>
          The whole game uses a passport theme. Levels are stops on a route
          map, a cleared level gets a stamp, and every flag you get right
          becomes a <strong>visa</strong> in your collection. There’s also a
          day streak, a 3-2-1 countdown, original synthesised sound effects,
          dark and light themes, a reduced-motion option, and a spinning neon
          globe on the home page.
        </p>
      </section>

      <section>
        <h2>Designing It</h2>
        <p>
          It started as a written plan, not code: the rules, the screens, the
          order of the flags and what was out of scope. Claude Code wrote the
          code from that plan, and the game runs as static files on AWS.
          That’s the whole technical story.
        </p>

        <h3>From quiz to game</h3>
        <p>
          The first playable version worked, but it looked like every other
          flag quiz, which is exactly what I set out to avoid. The new
          direction was dark, glassmorphism and glowing cards with
          micro-animations, inspired by a couple of Dribbble shots. The navbar
          went, because it broke the game feel, and the flag’s glow now takes
          the flag’s own colours.
        </p>
        <p>
          Plenty didn’t survive: a twilight background, a sharp-edged sci-fi
          card style and a realistic globe that lost to the neon one. When
          trying an idea takes minutes, throwing it away costs nothing.
        </p>

        <h3>Playtesting decides</h3>
        <p>
          Playing it, I couldn’t feel any real difference between the three
          routes. On paper they were different, but in my hands they felt the
          same. So each route got its own rules and its own identity: hearts,
          a flag that hides, and finally a memory mode where the options only
          appear after the flag is gone. That last idea came after the game
          was already live.
        </p>

        <h3>Looking back</h3>
        <p>
          I wouldn’t do it differently. The creative ideas came along the way,
          not in advance. The memory mode, the routes and many of the UI
          decisions only appeared once I could play the previous version. I’m proud of
          every new version.
        </p>
        <p>
          But if I’m being honest, I still have an inner thought that I
          personally don’t like the UI. So that’s still on my list.
        </p>
      </section>

      <section>
        <Alert type="success" title="Go play it!">
          Try the flag quiz at{" "}
          <a
            href="https://flagguesser.yagnik.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            flagguesser.yagnik.dev
          </a>{" "}
          and see how many visas you can collect. Feedback is very welcome.
          Reach out through the <a href="/contact">contact page</a>.
        </Alert>
      </section>
    </article>
  );
}

export default Content;
