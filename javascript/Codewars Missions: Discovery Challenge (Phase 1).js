/**
 * CODEWARS COMMUNITY CHALLENGE #1: Problem Discovery
 *
 * You know what improvements Codewars needs. Tell us — and tell us well.
 *
 * Fill in the fields below to describe the most important problem
 * you think Codewars should solve next. The winning problems become
 * the brief for Challenge 2, where you build real solutions that will 
 * begin to change Codewars into a more capable and up-to-date platform.
 *
 * This isn't a bug report. Think about what's actually broken at a
 * deeper level — the kind of thing that, if fixed, would meaningfully
 * change the experience for a whole category of users.
 *
 * 22 tests validate your structure and completeness.
 * The review panel + community vote will evaluate your ideas.
 * All tests must pass before your submission is accepted.
 *
 * Read the full kata description for what makes a strong submission.
 *
 * Categories: platform_stability | kata_quality | onboarding_ux |
 *             ai_integration | community_tools | bugs | other
 */

function submitProposal() {
    return {
      problem_title: "Broken Kata Reporting Does Not Lead to Reliable Fixes",
      category: "kata_quality",
      problem_statement: "Codewars has a quality control gap between discovering kata problems and actually resolving them. Users can encounter broken tests, outdated language behavior, unclear instructions, poor edge-case coverage, or misleading difficulty signals, but the path from report to resolution is fragmented and inconsistent. Reports can live across GitHub issues, Discord, Discourse, and internal moderation workflows, which makes the system feel opaque to the average user. The result is not just that some kata are broken. The deeper problem is that community feedback is not being converted into a visible, dependable repair loop. That weakens trust in kata quality, wastes solve time, and makes both newcomers and experienced users less confident that the platform is curating content at the level a practice site should.",
      who_affected: "This affects new users most severely because they cannot easily tell whether a failure comes from their own code, a bad kata, unclear wording, or outdated tests. It also affects regular solvers who lose time debugging platform or kata issues instead of practicing. Kata authors, moderators, and maintainers are affected too because reports are scattered, repeated, and harder to prioritize when there is no clear end-to-end workflow.",
      evidence: "The challenge prompt itself uses broken tests and missing feedback loops as an example of the kind of root problem worth identifying. Codewars documentation on fixing kata says issues are flagged through multiple channels including automated tooling, Discourse, and Discord, which suggests fragmented intake. The content-issues repository also notes that admin-only fixes may be processed slowly until better tools exist. Community complaints about curation and broken kata quality have appeared for years in GitHub issues and discussions, including reports about broken random tests and broader claims that the kata curation process is broken. Sources: https://www.codewars.com/kata/69b09525f9363171fafa510d , https://docs.codewars.com/curation/howtos/fixing/ , https://github.com/codewars/content-issues , https://github.com/codewars/codewars.com/issues/1626 , https://github.com/codewars/codewars.com/discussions/3245",
      feasibility_score: 3,
  
      role: "student and career-switching full-stack developer",
      experience_years: "0-2",
  
      worked_solo_or_team: "solo",
      ai_tools_used: ["ChatGPT"],
      primary_ai_tool: "ChatGPT",
      ai_usage_percent: 35,
      where_ai_helped: ["ideation", "research", "writing", "analysis"],
      where_ai_fell_short: "AI helped organize the argument, but it could not decide the best proposal on its own. It tended to generate generic product language and broad platform suggestions that sounded polished without being specific enough to Codewars. I had to guide it toward a root-cause problem, verify whether the evidence was real, and make sure the final proposal reflected actual community pain instead of a made-up improvement pitch.",
      other_tools_used: "Codewars mission page, GitHub issues, Codewars docs, browser notes",
      time_spent_minutes: 35
    };
  
  }