---
title: "Work at AIMS Ghana"
description: "Open roles, calls for applications and procurement notices, newest first. Check the date on a posting — older notices may have closed."
build_status: "built"
draft: false

intro_blocks:
  - direction: "text-left"
    title: "TEACH AT AIMS"
    content: "Join a pan-African network of centres of excellence dedicated to advancing mathematical sciences and developing the next generation of African leaders in science, technology and innovation. The African Institute for Mathematical Sciences(AIMS) Ghana is a postgraduate educational centre that recruits students from all around the world who have backgrounds in the mathematical sciences (including pure and applied mathematics, physics, computer science, mathematical biology and other fields). Lecturers teach a 1 year master’s degree in mathematical sciences and are able to meet and work closely with prestigious scientists from around the world. To be a part of this rewarding experience and for further enquiries, Apply at [aims-senegal.org](https://aims-senegal.org)."
    image: "images/about.jpg"
  - direction: "image-left"
    title: "SUPERVISE A PROJECT AT AIMS"
    content: "Since 2012, AIMS Ghana has trained over 500 graduates, 33% of them women, through fully funded postgraduate programmes that combine rigorous coursework with independent research and real-world application. The research project phase involves students working on a topic with a supervisor.  Research that is designed to prepare students for further research or professional careers. The project emphasises literature review, independent problem-solving, optional computational or experimental work, and the clear communication of results through a written dissertation and an oral presentation, with weekly supervisor interactions forming a core part of the experience.  For this to be successful, AIMS Ghana seeks experts to supervise its students for these projects. Apply at [aims-senegal.org](https://aims-senegal.org) to join the AIMS Ghana community as a supervisor."
    image: "images/hero.jpg"
  - direction: "text-left"
    title: "TUTOR AT AIMS"
    content: "Tutors are the bridge between the lecturers and students of the AIMS Ghana community. They form a core part of the interactive learning environment being fostered at AIMS Ghana. The roles of a teaching assistant include providing general assistance to the students and lecturers through various ways such as participating in problem-solving and contributing to the assessment of student performance on an ongoing basis. Appointments are typically for a full academic year and require at least a masters in one of the mathematical sciences as well as strong communication skills. If you are interested in contributing to the AIMS Ghana community as a tutor, apply at [aims-senegal.org](https://aims-senegal.org)"
    image: "images/about.jpg"
---
<article class="career-card">
  <div class="career-card__meta">
    <time datetime="{{ .Date.Format "2006-01-02" }}">{{ .Date.Format "2 Jan. 2006" }}</time>
    <span class="career-card__tag">{{ .Params.category }}</span>
  </div>
  <hr class="career-card__rule">
  <h3 class="career-card__title"><a href="{{ .RelPermalink }}">{{ .Title }}</a></h3>
  <p class="career-card__excerpt">{{ .Summary | plainify | truncate 160 }}</p>
  <div class="career-card__actions">
    <a class="career-card__btn" href="{{ .RelPermalink }}">More info</a>
    {{ if .Params.closed }}
      <span class="career-card__btn career-card__btn--primary" aria-disabled="true">Closed</span>
    {{ else }}
      <a class="career-card__btn career-card__btn--primary" href="{{ .Params.apply_url | default .RelPermalink }}">Apply Now</a>
    {{ end }}
  </div>
</article>