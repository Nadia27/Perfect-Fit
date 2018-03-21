'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert('asd_resources_tables', [{
        Name: 'Marcus Autism Center',
        Location: '1920 Briarcliff Rd NE, Atlanta, GA 30329',
        Phone_Number: 4047859350,
        Description: 'Specializes in diagnoses and various therapy treatment of individual with Autism.',
        Price: 5,
        Insurance_Accepted: true,
        Catergory: 'Therapy',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Kiddo\'s Clubhouse Foundation',
        Location: '11539 Park Woods Cir #502, Alpharetta, GA 30005',
        Phone_Number: 6785273224,
        Description: 'Provides scholarships to families who are not able to pay for therapeutic services.',
        Price: 0,
        Insurance_Accepted: true,
        Catergory: 'Financial Support',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Kiddo\'s Clubhouse',
        Location: '11539 Park Woods Cir #502, Alpharetta, GA 30005',
        Phone_Number: 6785273224,
        Description: 'Therapy services: Speech, Occupational, Physical, ABA, and more.',
        Price: 3,
        Insurance_Accepted: true,
        Catergory: 'Therapy',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Parent to Parent of Georgia',
        Location: '3070 Presidential Pkwy #130, Atlanta, GA 30340',
        Phone_Number: 8002292038,
        Description: 'Parent to Parent of Georgia provides support, information services, training, and leadership opportunities for families who have children and youth with disabilities.',
        Price: 0,
        Insurance_Accepted: false,
        Catergory: 'Support',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Right Start Therapies',
        Location: '2295 Henry Clower Blvd SW #100, Snellville, GA 30078',
        Phone_Number: 7709959600,
        Description: 'Intervention clinic providing a host of therapies: Speech, Occupational, Physical, and Reading Tutoring.',
        Price: 3,
        Insurance_Accepted: true,
        Catergory: 'Therapy',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'The Bridge of Georgia',
        Location: '109 Blaine Street Monroe, GA 30655',
        Phone_Number: 7704066111,
        Description: 'Private school focused on developing the abilities of children of all ages and abilities.',
        Price: 5,
        Insurance_Accepted: false,
        Catergory: 'Education',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'The Cloverleaf School',
        Location: '1894 Ludovie Lane Decatur, GA 30033',
        Phone_Number: 4044743904,
        Description: 'Non-profit school (Kindergarten through 8th Grade) that specializes in educating children with ADHD, Autism, Asperger’s, anxiety, and other learning differences to equip them with the skills needed to navigate the world with confidence.',
        Price: 5,
        Insurance_Accepted: false,
        Catergory: 'Education',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'MDE School',
        Location: '1517 Johnson Ferry Rd #100, Marietta, GA 30062',
        Phone_Number: 7709714633,
        Description: 'MDE School’s mission is to provide a loving environment for all children with delayed communication and language processing skills, while keeping a 4-1 ratio.',
        Price: 5,
        Insurance_Accepted: false,
        Catergory: 'Education',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Sensations Therafun',
        Location: '1704 Chantilly Drive NE, Atlanta, GA 30324',
        Phone_Number: 4046343500,
        Description: 'Sensations is an exciting, safe alternative to typical playgrounds. It is designed especially for sensory recreation. It is great for kids who have Autism, are on the Autism Spectrum, have Sensory Processing Disorders, ADHD, Down\'s Syndrome, Asperger\'s Syndrome and all children who need sensory recreation.',
        Price: 1,
        Insurance_Accepted: false,
        Catergory: 'Extracurricular',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Neveland Aquatics',
        Location: '2430 Nottingham Way, Cumming, GA 30040',
        Phone_Number: 7708276373,
        Description: 'Neverland Aquatics promotes a lifelong passion for fitness, hard work, self worth, and community through rigorous and meaningful therapeutic aquatic instruction for individuals with disabilities.',
        Price: 2,
        Insurance_Accepted: false,
        Catergory: 'Extracurricular',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Haven Hills Therapeutic Riding Center',
        Location: '7580 Rivertown Rd, Fairburn, GA 30213',
        Phone_Number: 6782969693,
        Description: 'Provides recreational riding lessons for people with a disabilties such as: Autisum Spectrun Disorder, Sensory Intergration Disorder, etc.',
        Price: 1,
        Insurance_Accepted: true,
        Catergory: 'Extracurricular',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Stone Soup Camp',
        Location: '1789 State Hwy 11, Monroe, GA 30656',
        Phone_Number: 7702676603,
        Description: 'Provides summer day camps for children of all abilities. Services provided through The Bridge of Georgia School located in Monroe, GA.',
        Price: 2,
        Insurance_Accepted: false,
        Catergory: 'Extracurricular',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Camp You B You',
        Location: 'Decatur Family YMCA, 1100 Clairmont Ave, Decatur, GA 30030',
        Phone_Number: 4043779622,
        Description: 'Camp You B You day camp offers social skills building within an inclusive setting for children ages 5-12 with autism and related disorders who present with moderate to high functioning skills.',
        Price: 3,
        Insurance_Accepted: false,
        Catergory: 'Extracurricular',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'DDD Foundation',
        Location: '52 Executive Park S Suite 5203, Atlanta, GA 30329',
        Phone_Number: 4049420086,
        Description: 'Nonprofit dental office providing accessible and compassionate dental treatment to children and adults with developmental disabilities.',
        Price: 5,
        Insurance_Accepted: true,
        Catergory: 'Medical',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Children\'s Healthcare of Atlanta',
        Location: '1405 Clifton Rd., Atlanta, GA 30329',
        Phone_Number: 4047855437,
        Description: 'Specialized pediatric care. Our team makes sure your child is comfortable and happy.',
        Price: 5,
        Insurance_Accepted: true,
        Catergory: 'Medical',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Wheat Mission in Atlanta',
        Location: '4281 Steve Reynolds Blvd #5 Norcross, GA 30093',
        Phone_Number: 7707170790,
        Description: 'Full day education program designed to provide behavioral support and spend time with other individuals with similar symptoms to promote social interactions.',
        Price: 1,
        Insurance_Accepted: false,
        Catergory: 'Extracurricular',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Annandale Village',
        Location: '3500 Annandale Ln. Suwanee, GA 3002',
        Phone_Number: 7709458381,
        Description: 'Full time care for individuals with mental health issues, similar to elderly centers and 24/7 coverage',
        Price: 3,
        Insurance_Accepted: false,
        Catergory: 'Medical',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }, {
        Name: 'Disability Link',
        Location: '1901 Montreal Rd #102, Tucker, GA 30084',
        Phone_Number: 4046878890,
        Description: 'Advocacy, transition, 4-core-services, independent living skills education center',
        Price: 0,
        Insurance_Accepted: false,
        Catergory: 'Support',
        CreatedAt: new Date(),
        updatedAt: new Date()
      }

    ]);

  }

};