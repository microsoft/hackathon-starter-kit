# External Hackathon

This page is designed to provide guidance, and ideas on running a External Hackathon.  

[In-person or virtual or hybrid?](./ThingsToKeepInMind.md)

## Steps to run a External Hackathon

#### 1. Determine Name, Purpose and Outcomes of the Hackathon

Is this a hackathon (which is focused on a problem statement or category), workshop (which is more focused on education of the material) or [openhack](https://openhack.microsoft.com/)? If it's a hackathon, what is the problem statement?

Either in combination with, or subsequent to this step (after pitching the idea), the organizing team should be formed.

Disclaimer: Though the workshop link takes you to OpenHack-FHIR, it's run as more of a workshop where you simply follow the instructions to get to the finish :) 

#### 2. Set Date and Determine Event Duration

After you understand the goals and expected outcomes, you can start building a timeline for the event. The type of event, required advertising, time to get resources in place, etc. will all affect when you should run the event.

**Event duration can be varied.** 

> _Be mindful of the participant's schedule, the longer the event the less likely they will be to dedicate their time._

If you are only ideating and building "slideware", the event can much much shorter than if you are trying to build an MVP or working prototype. As reference, ideation should be given at least 2 hours and 2 hours for presentation development. These types of events can typically be run in a 6-8 hour day. 

Events with an expected outcome of an MVP or working prototype should accommodate at least an additional 6 hours of development time. Depending on the modality and accommodations, some hackathons can run multiple days for serious production. 

#### 3. Determine the Roles needed for the Event

See [Roles](/README.md#roles) for further details.

#### 4. Determine how the event will be Advertised

Now that you've determined the Name, Purpose, Outcomes, Date, and Roles required you can start the process of advertising. Below are a common set of questions you can use as a starting point.

- Will the event require a website?
  - If so...
    - Where will it be hosted?
    - Who will build it?
    - Who will pay for it?
    - Who will maintain and own it?
    - Will it continue to exist after the event is over?
- Will social media be used?
  - If so...
    - Which platform(s) will be used? Think about LinkedIn, Facebook groups, Reddit, hackernews, etc
    - Will the event have its own account and if so, who will own them?
- Is there a different forum for recruiting different types of individuals (different skill sets, industry/experience, support, etc.)?
- How long will advertising take place before registration is opened?
  - Remember, besides the duration deciding on the channels you wish to advertise is also crucial. 
- Is there a common set of materials used for marketing?
  - This is important as you want to have unified image/message for different channels

[//]: <> (include section or information about wordpress CMS hosting and/or the registration tool that was build by EmOps?)

#### 5. Set Budget and Determine Finances

Financial budgeting is a common oversight with hackathons, below are some example expenses to use as a starting point.

- Registration form or website
- Microsoft Teams Tenant
- Prizes 
  - *Caution* Virtual hackathons will make this logistically difficult. 
- Developer Tools (Hardware/Software)
  - If you expect participants to bring their own, this needs to be clearly communicated.
- Lab environment
  - You may want to provide a temporary "sandbox" in which participants can work. Cloud capabilities like Azure make for a lower technological barrier to entry and allow for rapid development and testing.

If the event is being held in person, there will be additional costs such as the examples below.
- Venue
- Dining
- Event Staff (as required or suggested by the venue)
- Expenses for Keynote Speaker or other distinguished guests

Sponsorships can act as a form of income for the event to help cover the costs. Offering sponsorships can be a mutually beneficial engagement, though you should be careful to target the correct sponsors which add value to the event.

#### 6. Determine How and Where Artifacts will be Shared

Unless the goal of the hackathon is to be purely educational, artifacts (or deliverables) are a primary goal of the event. This means that a few decisions need to be made by the organizing team. 

- Where/how will teams collaborate on their work? This is especially important when it's [Virtual or Hybrid](./ThingsToKeepInMind.md) hackathons
- Where will teams post their completed work at the end of the event?
  - Github?
    - If GitHub, will you create the team programmatically or manually? There are pros/cons for both.
  - Microsoft Teams?
  - Sharepoint/OneDrive?

Additional considerations when choosing a platform for collaborating and sharing work: 
- Can the content be Open Source? We suggest that it is - see [Open Source](/README.md#open-source)
- Are the organizers going to publish all of the content on behalf of the teams, or will the teams publish their content directly?
- Do any of the artifacts need "approved" before being shared (intellectual property, etc.)?

Lastly, if the event is being recorded at all (kickoff/closing, "action shots", etc.) there are considerations around that media. 

> When you are recording, you may want to consider gettting consent from the participants

- Where will these be stored - Microsoft Stream, Youtube, Microsoft Teams?
- Who will own the content and under what account will it be shared?
- Who is doing the recording, and any needed "trimming" of the videos?
- Do participants need to sign a Media Release Consent? 
  - If not, provide notice to the participants when recording is about to start so they can choose whether or not they want to be recorded.

#### 7. How will the participants register?

If using Teams, the best way for people to register is using a MS account. As people need to be added as guests to a MS tenant you want to minimize much friction as possible from the get-go. We wouldn't want them to send unnecessary emails to ask them to register for an MS account and having to ask them to send us their MS account email.

- We created an [User Registration API](https://github.com/microsoft/NH4H-UserReg/) (always maintained) to get you started with the registration 

> We had ran our fair share of hackathons and found using a MS social login is the best way to register participants if MS Teams is the way you want to collaborate. That way, there is no confusion for the registrant. 

#### 8. Determine if Teams will be Assigned or Self-Organizing

Depending on the type of event, the organizers may want the teams to be self-organizing or to be assigned by the organizers. There are Pros and Cons to each configuration and the decision should be made specific to that event.

If the teams are going to self-organize, are the organizers going to help facilitate the formation of those teams (eg. a "lounge" or some sort, idea board, "profiles" with skills, etc.)? 

If the teams are going to be assigned, what is the criteria for the creation of those teams? We suggest trying to be as diverse as possible in relation to skills, background, and experience. Some suggested ways to organize teams is by attributes such as Time Zone, Role Type/Background, Level of Experience, Category/Problem Area Understanding, etc.

> If people are having hard time trying to decide, it may be good to remind them not to overthink. Let them know this is just a weekend hackathon and the point is to learn, hack, network, and most importantly, to have fun!

#### 9. Write a Summary of the Event including "Who, Why, When, How" and Expected Outcomes

Writing the event summary will be helpful when advertising so that you potential event participants can determine whether or not they will attend. Make sure to be as inclusive as possible in the wording of this summary as to not deter someone away, even if they may not be a "perfect fit" - that may just mean they can bring different viewpoints and experiences to the table.

Example:

> **Who:** This event is open to anyone who is interested in Healthcare outcomes, and the technology that enables patient care.
>
> **Why:** This event presents a rare opportunity for nurses, other healthcare professionals, developers, engineers, IT experts and other innovators with diverse ideas and skills to collaborate in real time to develop tech-based, minimally viable products (MVPs) that can help address today’s most pressing healthcare challenges.
>
> **When:** May 16th-18th (see agenda for more details)
>
> **How:** Register Here (insert link)! Each registrant will be guided through a process to create your profile, pitch ideas, and create or join a team.
>
> **Outcomes:** We hope to have teams that have ideas or projects either as practitioners, or technologists which they can further collaborate on after the event and help drive towards implementation.

At this point you may also want to determine the following items which may help incentivize hackers.

- Can the event be "gamified"? Depending on the type of event, the ability to have "points", "levels" or "badges" may help motivate the participants.
- Will there be winners, or prizes? This can help with a bit of friendly competition, and help drive participants towards a goal.
  - If so, who will adjudicate?

#### 10. Create a List of Pre-Hack Educational Material

Depending on the event, the organizers may want to put together material to review at their own pace to help the event run more smoothly. This could be reading, videos, etc.

You could always run a virtual _pre event_ the week prior or on the week of the hackathon to make sure everyone understands what is expected of them. Go over the material you created for them. 

> you can use this pre-event week to work out any technical kinks you may encounter during the hackathon.

Training material could include things like the following:

- How to create / join a team
- How to use the collaboration platform(s), (eg. Microsoft Teams, Github, etc.)
- Design Thinking Material
- Training for Specific Technical Resources

> _Caution for Virtual Hackathon_
> Understand people will have different degrees of technical background. You may even need to show someone how to share their screen! Oh, yes... It happens. :)


#### 11. Create and Publish the Agenda

An agenda is important to help frame the event, both for the organizers and the participants.


> Example Event Timeline:
>
> - (date) Registration Content and Site Ready
> - (date) Registration opens
> - (date) Event Kickoff
>   - (time) Kickoff / Keynote
>   - Problem Pitching
>   - Team Formation
> - (date) Hackathon Day 1
>   - (time) Start Ideating
>   - (time) Start Building
> - (date) Hackathon Day 2
>   - (time) Stop building / Start Sharing
>   - (time) Closing Remarks
> - (date) Event Retrospective (organizers, but may include participants if desired)

#### 12. Create Sign-up Form

Sign-up be facilitated through any platform that allows you to collect the right kind of information. You want to be mindful though of how the data is collected, stored, managed and accessed - especially if you may be subject to privacy regulatory requirements. You may want to consult your privacy team to make sure you're collecting information in a compliant way.

While it may seem like a good way to collect information for purposes of marketing, you want to be careful about what you collect and make sure to only ask for the *required* information.

The facilitation of registration will likely be informed by prior decisions (whether or not to use a website, what platform will be used to host the event, etc.). However its done, make sure you have the ability to access the registration information so that you can communicate with the participants, form team (if required), and do anything else that requires the information submitted by the participants.  

#### 13. Advertise the Event

Now that most decisions have been made and prospective participants should have enough information to decide if they want to register, it's time to advertise the event. 
Using the social media platform(s), and any other avenues you should send out, or send a link to, the event summary which has a link to registration. 

Organizers will need to determine how long before the event to open registration and start advertising, keeping in mind that if it's too long the participants may forget and not show up and if it's too short notice they may not be available. 

There is a good middle ground, the decision will need to be made based on the your event specifically but _**we recommend opening registration about 3 weeks in advance**_.

#### 15. Create Teams

After participants have registered, or started registering, team formation can begin. If hackers are not forming their own teams, this is when the organizers will start putting teams together based on attributes discussed in step 7 [Determine if Teams will be Assigned or Self-Organizing](#7-determine-if-teams-will-be-assigned-or-self-organizing).

#### 16. Set-up Help Desk

Whether [in-person or virtual](./ThingsToKeepInMind.md) it's vital to have experts on stand by ready to answer technical / logistical questions. 

#### 17. Send Team Meeting Invites if not using Breakout Rooms

After teams are formed, depending on the collaboration platform, a decision will need to be made as to how the teams will meet. For example, in Microsoft Teams each Team can have their own Team, Channel, Meeting, or Breakout Room.

Keep in mind that if the organizers are assigning teams, that there will always be hackers that don't show up or cancel and teams will have to be adjusted last-minute.

#### 18. Build Kickoff Deck

At this point, whomever will be kicking off the event will want to start building the presentation to do so. Suggested information to include could be, but is not limited to the following.

> - Welcome
> - Event Summary Recap
> - Event Agenda Recap
> - Reminder of the Goals and Outcomes
> - Reminder of Design Thinking Principles
> - Encouragement to fail fast, and not fall into "analysis paralysis"
> - Introduce Keynote Speaker (if the event has one)
> - Reminder of the training material on how to use the platforms/tools
> - Next Steps & Timeline

#### 19. Build Post-Hack Survey

Capturing information from the participants about usefulness of the event, things that went well, things that could be improved, and any other information will be important for the event retrospective and may be useful to determine the impact of the event aside from simply the number of participants. 

#### 20. Build Closing Remarks Deck

You will also likely want to build a presentation for the closing remarks. Suggested information to include could be, but is not limited to the following.

> - Congratulations for completing the event
> - Recap of the Event
> - Any highlights
> - Thanks to any sponsors/organizers
> - Link to Post-Hack Survey
> - Next Steps

In the closing remarks, make sure to have a plan for and emphasize that teams should not stop working on their project. If possible, help outline next steps for their projects and where they should go from this point.

[Hackathon Starter Kit Main Page](https://github.com/microsoft/hackathon-starter-kit/)
