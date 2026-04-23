const { Pool } = require("pg");
require("dotenv").config();

const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function seedBD() {
  const query = `
    DROP TABLE IF EXISTS messages, session, users CASCADE;

    CREATE TABLE users (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      username VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      is_member BOOLEAN DEFAULT FALSE,
      is_admin BOOLEAN DEFAULT FALSE
    );

    CREATE TABLE messages (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      title VARCHAR(255), 
      text TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()    
    );

    CREATE TABLE session (
      sid VARCHAR PRIMARY KEY,
      sess JSON NOT NULL,
      expire TIMESTAMP(6) NOT NULL
    );

    INSERT INTO users (username, password, is_member, is_admin) VALUES
      ('alisonwonderland', 'demo_pass', TRUE, FALSE),
      ('dangitbobby', 'demo_pass', TRUE, FALSE),
      ('xmcarol', 'demo_pass', TRUE, FALSE),
      ('sorrydave', 'demo_pass', TRUE, FALSE),
      ('nuwanda', 'demo_pass', TRUE, FALSE),
      ('agentlebowski', 'demo_pass', TRUE, FALSE),
      ('josh', '$2b$12$vFGinY9BWhOdBOzr6ES.e.l0QOByBGtzH5acIXZ9rs4gPCvpWG92S', TRUE, TRUE);

    INSERT INTO messages (user_id, title, text, created_at) VALUES
      (1, 'Signal Pattern',
      'A deep space signal repeats in structured bursts that do not match known natural sources. Researchers debate whether it is interference or intentional communication. What stands out is the consistency of timing and slight variation in pattern when reanalyzed under different filtering models.',
      '2026-04-21 09:03:11.120000'),

      (2, 'Neon City Logic',
      'A rain-soaked futuristic city operates like a predictive system rather than a traditional society. Every movement is logged, analyzed, and used to influence future behavior. Detectives working within this environment begin questioning whether crime is an act of free will or simply a predicted outcome of statistical modeling systems that anticipate human decisions before they happen.',
      '2026-04-21 11:47:52.441000'),

      (3, 'Time Fracture Study',
      'Time begins to behave inconsistently in a controlled experiment where subjects report memories of events that have not yet occurred. As the anomaly intensifies, cause and effect begin to lose their linear structure. Scientists attempting to measure the phenomenon find that each observation alters the result, creating unstable loops of interpretation that make it impossible to establish a fixed timeline.',
      '2026-04-20 18:15:33.000000'),

      (4, 'First Contact Noise',
      'A signal from deep space appears embedded in background radiation. At first it is dismissed as noise, but repeated analysis reveals structured repetition. The challenge is not translating language, but determining whether the pattern represents communication or is simply a natural cosmic phenomenon misinterpreted by human expectation.',
      '2026-04-19 14:22:10.550000'),

      (1, 'Synthetic Narratives',
      'AI systems trained on vast collections of human storytelling begin producing coherent narratives that feel indistinguishable from human writing. These outputs contain emotional arcs, symbolic patterns, and thematic depth that were never explicitly programmed. Researchers debate whether this represents creativity or advanced statistical recombination. As systems evolve, some stories begin referencing their own artificial nature, raising uncomfortable questions about whether meaning requires consciousness or can emerge purely from complexity.',
      '2026-04-21 15:01:24.659093'),

      (2, 'Film Restoration Fragment',
      'A damaged film reel from decades ago is reconstructed frame by frame. As restoration progresses, inconsistencies appear in lighting, continuity, and even character behavior depending on frame order. Archivists realize that there may never have been a single definitive version of the film. Instead, what exists is a set of overlapping edits, each revealing a different interpretation of the same underlying material, challenging the idea of a fixed cinematic truth.',
      '2026-04-18 07:44:05.210000'),

      (3, 'Orbital Structure Stress',
      'A massive orbital habitat designed for long-term human survival begins experiencing cascading structural failures. Redundant systems fail in unexpected ways, amplifying instability rather than containing it. Engineers onboard struggle to isolate root causes as each correction introduces new unpredictable variables. The situation highlights how large-scale engineered systems can become vulnerable not through a single flaw, but through accumulated interdependencies that were never fully understood at design time.',
      '2026-04-21 22:19:48.900000'),

      (4, 'Recursive Cinema Theory',
      'A film explores the idea of narrative awareness, where characters gradually begin to recognize patterns of observation and adjust their behavior accordingly. Over time, the boundary between audience, creator, and character dissolves into a feedback loop of interpretation. Meaning is no longer fixed within the work itself but emerges dynamically through the act of being observed. This creates a destabilizing implication that storytelling may not be linear communication but a system that evolves through attention itself.',
      '2026-03-15 10:11:09.300000'),

      (1, 'Quantum Heist Model',
      'A theoretical heist spans multiple quantum branches where every decision creates parallel outcomes that must all succeed simultaneously for the operation to work. Planning requires mapping probabilistic timelines where failure in one branch affects stability in others. Participants effectively operate as distributed versions of themselves across alternate realities. The narrative explores how identity and intent behave when no single outcome can be considered the “real” one, but all outcomes must be accounted for at once.',
      '2026-02-02 16:33:44.120000'),

      (2, 'Silent Cinema Revival',
      'A modern experiment removes dialogue entirely from storytelling, relying instead on framing, motion, and pacing to convey meaning. Without spoken language, viewers interpret emotional progression through subtle visual cues and rhythm. This increases ambiguity while also deepening interpretive engagement, as each viewer constructs meaning differently based on perception rather than explicit exposition. The result is a highly subjective cinematic experience where interpretation becomes part of the artwork itself.',
      '2025-11-10 12:00:00.000000'),

      (3, 'Alien Archive Decode',
      'A recovered extraterrestrial dataset contains structured information that does not conform to any known human encoding system. It appears to combine mathematical sequences, symbolic imagery, and narrative-like structures simultaneously. Researchers struggle to classify whether it represents historical record, instructional material, or philosophical expression. The deeper the analysis goes, the more it appears that the act of interpretation may be part of the message itself, rather than just its decoding.',
      '2024-06-14 09:30:22.000000'),

      (4, 'Infinite Edit Space',
      'The infinite edit hypothesis proposes that every film exists not as a single finished version but as an unbounded space of possible cuts. Each edit produces a different interpretation, meaning there is no definitive narrative—only constrained selections from a vast combinatorial structure of possible arrangements. Editors become navigators of meaning rather than creators of it, selecting paths through a space where storytelling is fundamentally about constraint, structure, and probability rather than fixed authorship.',
      '2023-01-01 00:00:00.000000'),

      (5, 'The greatest of all time?',
      'Sam Raimi''s Spiderman trilogy is the great set of movies of all time.' || E'\n\n' || 'Prove me wrong...',
      '2026-04-22 00:00:00.000000'),

      (6, 'hey gang!',
      E'im jeremiah and im here to say that my favorite movies of all time are:\n\n1. The scorpion king 2: rise of the warrior (specifically on blu ray)\n2. the sam Raimi spiderman trilogy (but just the last one)\n3. anything with Robert Pattinson ;)',
      '2026-04-23 00:00:00.000000');
  `;

  await pgPool.query(query);
}

module.exports = { pgPool, seedBD };
