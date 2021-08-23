const Activity = require("../classes/activity.js");
const Reward = require("../classes/reward.js");
const User = require("../classes/user.js");
const Charity = require("../classes/charity.js");

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("helpr");
    db.dropDatabase();

    const rewardsCollection = db.collection("rewards");
    const charityCollection = db.collection("charities");
    const usersCollection = db.collection("users");
    const activitiesCollection = db.collection("activities");

    const charity1 = new Charity("Rosendael", "Scottish veterans residence");
    const charity2 = new Charity("British Heart Foundation", "Heart Charity");
    const charity3 = new Charity("Scottish Book Trust", "Transforming lives through reading");
    const charity4 = new Charity("Volunteer Edinburgh", "We have been helping all sorts of people in Edinburgh find volunteering opportunities for over 45 years");
    const charity5 = new Charity("Grass Market Community Project", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    const charity6 = new Charity("Children 1st", "Donec lorem ex, convallis quis sapien sed, tempor placerat nunc.");
    const charity7 = new Charity("Green Team", "Morbi volutpat semper convallis.");
    const charity8 = new Charity("CCLASP", "In pellentesque mauris nec enim gravida bibendum.");
    const charity9 = new Charity("The Action Group", "Aenean in mauris a purus vestibulum tempus.");
    const charity10 = new Charity("Hopscotch Children's Charity", "Etiam eu dapibus enim.");
    const charity11 = new Charity("Enable", "Suspendisse quis neque pretium, vulputate sapien scelerisque, placerat nisi.");
    const charity12 = new Charity("Streetwork", "Nunc sed consectetur nunc.");
    const charity13 = new Charity("Alzheimer's Scotland", "Aliquam accumsan et justo id mollis.");
    const charity14 = new Charity("Fresh Start", "Duis venenatis mauris quis diam elementum efficitur eu sit amet urna.");
    const charity15 = new Charity("Friends of the Earth Scotland", "Donec egestas blandit libero, sit amet interdum sem suscipit quis.");
    const charity16 = new Charity("Age Scotland", "Vivamus ac lacus lobortis, sollicitudin risus a, dignissim neque.");
    const charity17 = new Charity("Pregnancy Counselling & Care", "Phasellus sed pharetra ex.");


    const charityPromise = charityCollection.insertMany([
      charity1,
      charity2,
      charity3,
      charity4,
      charity5, 
      charity6, 
      charity7,
      charity8,
      charity9,
      charity10,
      charity11,
      charity12, 
      charity13, 
      charity14,
      charity15, 
      charity16, 
      charity17
    ]);

    const reward1 = new Reward(
      "Steam",
      "Get 20% off next Steam sale",
      "Use this voucher to get 20% off your next game on Steam. The game must be under £30. You must be over 18 years of age to redeem. Terms and conditions apply.",
      500,
      new Date(2022, 3, 14, 17, 30),
      "Digital"
    );
    const reward2 = new Reward(
      "CodeClan",
      "Get 100% off ",
      "Use this voucher to get 100% off your next course at CodeClan. You must 18 years of age to redeem. Terms and conditions apply.",
      5000,
      new Date(2022, 3, 14, 17, 30),
      "Digital"
    );
    const reward3 = new Reward(
      "Steam",
      "Buy one get one free next Steam sale",
      "Use this voucher to get a free game from a list of select games on Steam. The game must be under £30. You must be over 18 years of age to redeem. Terms and conditions apply.",
      580,
      new Date(2022, 4, 1, 17, 30),
      "Digital"
    );
    const reward4 = new Reward(
      "Codecademy",
      "Get 20% off next course",
      "This voucher gets you 20% off your next course at Codecademy. You must be 18 years of age to redeem. Terms and conditions apply.",
      500,
      new Date(2022, 6, 10, 17, 30),
      "Digital"
    );
    const reward5 = new Reward(
      "Game",
      "Get 20% off next sale",
      "Use this voucher to get 20% off your next game. The game must be under £30. You must be over 18 years of age to redeem. Terms and conditions apply.",
      430,
      new Date(2022, 1, 14, 14, 30),
      "Digital"
    );
    const reward6 = new Reward(
      "Pizza Hut",
      "£10 off your next order",
      "This voucher gets you £10 off your next order as long as the order is over £30. Must be over 16 years of age to redeem. Terms and conditions",
      500,
      new Date(2251, 0, 5, 10, 15),
      "Food"
    );
    const reward7 = new Reward(
      "China Munchy Box",
      "£10 off your next order over £30",
      "This voucher gets you £10 off your next order. Must be over 16 years of age to redeem. Terms and conditions apply.",
      580,
      new Date(2251, 0, 5, 10, 15),
      "Food"
    );
    const reward8 = new Reward(
      "Pure Pizza",
      "Buy one get one free next order",
      "This voucher gets you a free pizza when you buy one of equal or lesser value. You must be over 16 years of age to redeem. Terms and conditions apply.",
      500,
      new Date(2251, 0, 5, 10, 15),
      "Food"
    );
    const reward9 = new Reward(
      "Empire Brunch & Lunch",
      "Free French Toast",
      "This voucher gets you a free French Toast. You must be 16 years of age to redeem. Terms and conditions apply.",
      730,
      new Date(2251, 0, 5, 10, 15),
      "Food"
    );
    const reward10 = new Reward(
      "Costa",
      "Free latte",
      "This voucher gets you a free latte. You must be 16 years of age to redeem. Terms and conditions apply.",
      200,
      new Date(2251, 0, 5, 10, 15),
      "Food"
    );
    const reward11 = new Reward(
      "Bonnie Burrito",
      "Free side of nachos",
      "This voucher gets you a free small nachos. You must be 16 years of age to redeem. Terms and conditions.",
      700,
      new Date(2023, 0, 13, 14, 40),
      "food"
    );
    const reward12 = new Reward(
      "Adidas",
      "50% off shoes",
      "This voucher gets you 50% off a pair of shoes when you order them with Adidas. You must be over 18 years of age to redeem. Terms and conditions apply.",
      680,
      new Date(2023, 0, 13, 12, 32),
      "clothes"
    );
    const reward13 = new Reward(
      "LEVI'S",
      "30% off next order",
      "This voucher gets you 30% off your next order with LEVI'S. You must be over 18 years of age to redeem. Terms and conditions apply.",
      720,
      new Date(2023, 0, 13, 12, 32),
      "clothes"
    );
    const reward14 = new Reward(
      "NORTH FACE",
      "20% all outerwear",
      "This deal gets you 20% off all outerwear with North Face. You must be 16 years of age to redeem. Terms and conditions apply.",
      800,
      new Date(2023, 0, 13, 12, 32),
      "clothes"
    );
    const reward15 = new Reward(
      "CLARKS",
      "50% off summer selection",
      "This deal gets you 50% off everything in the summer selection. You must be 16 years of age to redeem. Terms and conditions apply.",
      830,
      new Date(2023, 0, 13, 12, 32),
      "clothes"
    );
    const reward16 = new Reward(
      "NEXT",
      "20% off next order over £50",
      "This deal gets you 20% off your next order over £50. You must be 18 years of age to redeem. Terms and conditions apply.",
      680,
      new Date(2023, 0, 13, 12, 32),
      "clothes"
    );
    const reward17 = new Reward(
      "DR. MARTENS",
      "10% off next order",
      "This voucher gets you 10% off your next order. You must be 18 years of age to redeem. Terms and conditions apply.",
      800,
      new Date(2023, 0, 13, 12, 32),
      "clothes"
    );
    const reward18 = new Reward(
      "River Island",
      "25% off next order",
      "This deal gets you a grand 25% off your next order. You must be 16 years of age to redeem. Terms and conditions apply.",
      670,
      new Date(2023, 0, 13, 12, 32),
      "clothes"
    );
    const reward19 = new Reward(
      "New Look",
      "10% off next order",
      "This voucher gets you 10% off your next order over £30. You must be 16 years of age to redeem. Terms and conditions apply.",
      570,
      new Date(2023, 0, 13, 12, 32),
      "clothes"
    );
    const reward20 = new Reward(
      "Urban Outfitters",
      "25% off next order ",
      "This deal gets you a whopping 25% of your next order. You must be 18 years of age to redeem. Terms and conditions apply.",
      780,
      new Date(2023, 0, 13, 12, 32),
      "clothes"
    );
    const reward21 = new Reward(
      "Rokit",
      "10% off next order",
      "This voucher gives you 10% off your next order with Rokit. You must be 18 years of age to redeem. Terms and conditions apply.",
      800,
      new Date(2023, 0, 13, 12, 32),
      "clothes"
    );

    const rewardsUsersPromise = rewardsCollection
      .insertMany([reward1, reward2, reward3, reward4, reward5, reward6, reward7, reward8, reward9, reward10, reward11, reward12, reward13, reward14, reward15, reward16, reward17, reward18, reward19, reward20, reward21])
      .then((data) => {
        const [reward1, reward2, reward3] = data.ops;

        const user1 = new User(
          "Scott Kivlin",
          new Date(1991, 1, 4),
          "I'm something of an altruist myself, just out here trying to make the world a better place. So the other day, I was volunteering right, and I thought to myself, hey it's great to work for free and all, but you know what would make it even better... getting paid. So I mentioned my idea to Sarah and she was like, well it's not volunteering if you're getting paid is it? And I was like, yea I guess you're right.",
          100000,
          [],
          "email@example.com",
          "07777777777"
        );
        const user2 = new User(
          "Sarah Graham",
          new Date(1988, 3, 7),
          "So Scott had an idea to pay people to volunteer, and I was like, that's great and all, but then it's not volunteering is it? You should be doing it out of the goodness of your own heart, mate. But then I thought to myself, well, the more people there are volunteering the better, even if we do have to incentivize people to do it. So, how about just not calling it volunteering? It can be some weird middle-ground of incentivized work that's ultimately good for society. Volunteering for the postmodern world, I say.",
          480,
          [reward1._id],
          "email@example.com",
          "07777777777"
        );
        const user3 = new User(
          "Sam Hill",
          new Date(1993, 10, 11),
          "I'm not that concerned about the moral implications of incentivizing people to volunteer. I mean ultimately what we're doing here is getting corporations to fund work that actually helps society. Those same corporations that exploit workers and destroy the environment in their dogged pursuit of profit. This is the very least they could do to make up for the abuse of capitalism, the very reason people need help from charities in the first place.",
          460,
          [reward2._id],
          "email@example.com",
          "07777777777"
        );
        const user4 = new User(
          "Garry Hall ",
          new Date(1993, 17, 3),
          "You know, I helped make this app. I think it's pretty good. Anyway, I want to tell you a story... Last month I was dealing with insomnia, so I traveled to the monastery to ask for advice. The monk said that I had to believe in the act of sleep, that sleep was a privilege. Then he asked if I'd ever swam in the river because a good sleep was like surrendering yourself to the current. The monks there fish in from the walls of the monastery. They don't use bait or any barb because they don't mean to actually catch anything. They merely do it for peace of mind. I don't think there's anything especially profound in that.",
          450,
          [reward2._id, reward3._id],
          "email@example.com",
          "07777777777"
        );
        return usersCollection.insertMany([user1, user2, user3, user4]);
      });

    Promise.all([rewardsUsersPromise, charityPromise]).then((data) => {
      const [userData, charityData] = data
      const [user1, user2, user3, user4] = Object.values(userData.ops)
      const [rosendael, bhf, scottishBookTrust, volunteerEdinburgh, grassmarketCommunityProject, children1st, greenTeam, CCLASP, theActionGroup, hopscotchChildrenCharity, enable, streetwork, alzheimersScotlandNationalOffice, freshStart, friendsOfTheEarthScotland, ageScotland, pregnancyCounsellingCare] = Object.values(charityData.ops)

      const activity1 = new Activity(
        "Clean up the park",
        volunteerEdinburgh._id,
        "Hill walking and helping the community come together in this action-packed Saturday morning sesh. You'll get your very own light weight grab and grip litter picker upper, a garbage bag, and a high vis vest. We'll let you loose in the craggy environs of Holyrood Park to spend the morning as you please. Wander through the dramatic landscape of this ancient volcanic wonderland of lochs and cliffs, peaks and valleys. A Little slice of the highlands right here in Edinburgh. Scour the earth for cigarette butts and broken bottles, used tissue and doggy poo bags.",
        "3 hours",
        {
          description: "Holyrood Park",
          coordinates: [55.946538, -3.159791],
          postcode: "EH88HG"
        },
        30,
        new Date(2021, 10, 13, 14),
      );
      activity1.receiveApplication(user1._id)
      activity1.receiveApplication(user2._id)

      const activity2 = new Activity(
        "Help our boys",
        rosendael._id,
        "We support youths in the community through mentorship and tutoring. We are looking for volunteer peers to spend time with our boys to help them develop constructive habits and healthy hobbies. Shoot some hoops, play guitar, or go for a hillwalk; the possibilities are endless.",
        "an afternoon",
        {
          description: "53 Canongate, Edinburgh",
          coordinates: [55.952499, -3.175948],
          postcode: "EH88BS"
        },
        170,
        new Date(2021, 9, 3, 14),
      );
      const activity3 = new Activity(
        "Help clean out our store rooms and have a cup of tea",
        bhf._id,
        "Our storage rooms are a dismal sight. With the pandemic we have been inundated with donations, but we have not been able to open the shop to sell anything. We're up to our necks in piles of clothing. A mound of unmarked bags are blocking the entrance to the garage.",
        "2.5 hours",
        {
          description: "136 Lothian Rd, Edinburgh",
          coordinates: [55.945229, -3.205543],
          postcode: "EH39BG"
        },
        20,
        new Date(2021, 9, 7, 14),
      );
      activity3.receiveApplication(user4._id)
      const activity4 = new Activity(
        "Book collection",
        scottishBookTrust._id,
        "As restrictions lift, we are ready to get back out there and collect all the book donations that have been offered in the past few months, but we can't do it alone. Mostly because we don't have a car. So if you have one, that would be great. You can be our chauffeur for the day, cruising around town, driving the speed limit, etc. We'll do the navigating. We'll also provide the tunes. So if you have an aux cord or bluetooth that would be great, actually only apply if you have a decent enough stereo because it's going to be alot of driving, and I get carsick when I don't have anything to listen to and Sheila will start whistling if it's quiet and I can't stand her whistling.",
        "8 hours",
        {
          description: "55 High St, Edinburgh",
          coordinates: [55.950903, -3.185356],
          postcode: "EH11SR"
        },
        230,
        new Date(2021, 10, 3, 16),
      );
      const activity5 = new Activity(
        "Help us feed the unhoused",
        grassmarketCommunityProject._id,
        "The Grassmarket Community Project supports Edinburgh’s most vulnerable people whilst providing the highest quality customer service.",
        "3 hours",
        {
          description: "86 Candlemaker Row, Edinburgh",
          coordinates: [55.947812, -3.193377],
          postcode: "EH12QA"
        },
        340,
        new Date(2021, 10, 3, 16),
      );
      const activity6 = new Activity(
        "Help us cook for the unhoused",
        grassmarketCommunityProject._id,
        "The Grassmarket Community Project supports Edinburgh’s most vulnerable people whilst providing the highest quality customer service.",
        "3 hours",
        {
          description: "86 Candlemaker Row, Edinburgh",
          coordinates: [55.947812, -3.193377],
          postcode: "EH12QA"
        },
        550,
        new Date(2021, 10, 3, 16),
      );
      const activity7 = new Activity(
        "Help us by taking some calls",
        children1st._id,
        "Children 1st is Scotland’s National Children’s Charity. We help Scotland’s families to put children first with practical advice and support in difficult times. We support survivors of abuse, neglect, and other traumatic events towards recovery.",
        "3 hours",
        {
          description: "83 Whitehouse Loan, Edinburgh",
          coordinates: [55.935930, -3.201669],
          postcode: "EH91AT"
        },
        230,
        new Date(2021, 10, 3, 16),
      );
      const activity8 = new Activity(
        "Help us by planning a fun-filled day",
        children1st._id,
        "Children 1st is Scotland’s National Children’s Charity. We help Scotland’s families to put children first with practical advice and support in difficult times. We support survivors of abuse, neglect, and other traumatic events towards recovery.",
        "3 hours",
        {
          description: "83 Whitehouse Loan, Edinburgh",
          coordinates: [55.935930, -3.201669],
          postcode: "EH91AT"
        },
        550,
        new Date(2021, 10, 3, 16),
      );
      const activity9 = new Activity(
        "Help us plant some trees",
        greenTeam._id,
        "The Green Team has been successfully running programmes of outdoor activities for young people since 1995.",
        "5 hours",
        {
          description: "2 McLeod St, Edinburgh",
          coordinates: [55.938984, -3.230441],
          postcode: "EH112ND"
        },
        535,
        new Date(2021, 10, 3, 16),
      );
      const activity10 = new Activity(
        "Dress up for the kids",
        CCLASP._id,
        "We help children and teenagers suffering from cancer or leukaemia in Scotland. We also offer supprt to diagnosed families and bereaved families.",
        "an afternoon",
        {
          description: "4 Upper Craigour, Edinburgh",
          coordinates: [55.918927, -3.137983],
          postcode: "EH177SF"
        },
        600,
        new Date(2021, 10, 3, 16),
      );
      const activity11 = new Activity(
        "Run a stall at one of our bake sales",
        theActionGroup._id,
        "The Action Group is about 'no barriers – for all of life'. We could use lots of fancy words to sum us up, but really it comes down to you.",
        "an afternoon",
        {
          description: "Norton Park Centre, 57 Albion Rd, Edinburgh ",
          coordinates: [55.961251, -3.167225],
          postcode: "EH75QY"
        },
        220,
        new Date(2021, 10, 3, 16),
      );
      const activity12 = new Activity(
        "Donate some toys",
        hopscotchChildrenCharity._id,
        "HopScotch is a children's charity in Edinburgh providing respite for disadvantaged children living in Scotland.",
        "an afternoon",
        {
          description: " Norton Park Centre, 57 Albion Rd, Edinburgh ",
          coordinates: [55.961251, -3.167225],
          postcode: "EH75QY"
        },
        180,
        new Date(2021, 10, 3, 16),
      );
      const activity13 = new Activity(
        "Help us run the disco",
        enable._id,
        "We provide a wide range of support services for people who have a learning disability in Edinburgh. Edinburgh office: Birch House Bankhead Crossway South.",
        "late evening",
        {
          description: "95 Causewayside, Newington, Edinburgh",
          coordinates: [55.937581, -3.180810],
          postcode: "EH91QG"
        },
        200,
        new Date(2021, 10, 3, 16),
      );
      const activity14 = new Activity(
        "Donations",
        streetwork._id,
        "We provide a range of services and support to the unhoused in Edinburgh. Our Streetwork service has been operating in Edinburgh for 25+ years.",
        "an evening",
        {
          description: "22 Holyrood Rd, Edinburgh",
          coordinates: [55.949265, -3.182590],
          postcode: "EH88AF"
        },
        80,
        new Date(2021, 10, 3, 16),
      );
      const activity15 = new Activity(
        "Take some calls and give advice",
        alzheimersScotlandNationalOffice._id,
        "The office aims to support people with dementia, their families, relatives and friends at any stage of the illness.",
        "3 hours",
        {
          description: "160 Dundee St, Edinburgh",
          coordinates: [55.940133, -3.219313],
          postcode: "EH111DQ"
        },
        120,
        new Date(2021, 10, 3, 16),
      );
      const activity16 = new Activity(
        "Help someone move in",
        freshStart._id,
        "Fresh Start is an Edinburgh based charity helping people the previously unhoused get established in their new home.",
        "as long as it takes",
        {
          description: "22-24 Ferry Rd Dr, Edinburgh",
          coordinates: [55.970538, -3.242664],
          postcode: "EEH44BR"
        },
        300,
        new Date(2021, 10, 3, 16),
      );
      const activity17 = new Activity(
        "Clean up the beach",
        friendsOfTheEarthScotland._id,
        "Scotland's leading environmental campaigning organisation, working for environmental & climate justice and campaigning for the planet and its people.",
        "2 hours",
        {
          description: "Thorn House, 5 Rose St, Edinburgh",
          coordinates: [55.953142, -3.194653],
          postcode: "EH22PR"
        },
        100,
        new Date(2021, 10, 3, 16),
      );
      const activity18 = new Activity(
        "Help by getting the shopping in",
        ageScotland._id,
        "Age Scotland is the leading charity representing older people in Scotland and supporting their rights and interests. We want everyone to love later life.",
        "2 hours",
        {
          description: "160 Causewayside, Edinburgh",
          coordinates: [55.936292, -3.180141],
          postcode: "EH9 1PR"
        },
        180,
        new Date(2021, 10, 3, 16),
      );
      const activity19 = new Activity(
        "Donations",
        pregnancyCounsellingCare._id,
        "Pregnancy Counselling & Care Scotland has been supporting families in Edinburgh and the Lothians for over 40 years.",
        "2 hours",
        {
          description: "24A Haddington Pl, Edinburgh",
          coordinates: [55.960204, -3.182338],
          postcode: "EH74AF"
        },
        150,
        new Date(2021, 10, 3, 16),
      );
      const activity20 = new Activity(
        "Help out our shop",
        pregnancyCounsellingCare._id,
        "The Cancer Research UK Edinburgh Centre brings together cancer scientists and clinicians from across the University of Edinburgh.",
        "2 hours",
        {
          description: "11 S Clerk St, Newington, Edinburgh",
          coordinates: [55.941371, -3.181378],
          postcode: "EH8 9JD"
        },
        100,
        new Date(2021, 10, 3, 16),
      );
      return activitiesCollection.insertMany([activity1, activity2, activity3, activity4, activity5, activity6,
        activity7, activity8, activity9, activity10, activity11, activity12, activity13, activity14, 
        activity15, activity16, activity17, activity18, activity19, activity20])
    }).then(() => client.close())
  })
  .catch(console.err);