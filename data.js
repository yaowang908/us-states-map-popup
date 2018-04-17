let JSONdata = [
    {
        "Name": "Princeton University",
        "Location": "Princeton",
        "State": "NJ",
        "Rank": 1,
        "Description": "Princeton, the fourth-oldest college in the United States, is located in the quiet town of Princeton, New Jersey. Within the walls of its historic ivy-covered campus, Princeton offers a number of events, activities and organizations. The Princeton Tigers, members of the Ivy League, are well known for their consistently strong men's and women's lacrosse teams. Students live in one of six residential colleges that provide a residential community as well as dining services but have the option to join one of more than 10 eating clubs for their junior and senior years. The eating clubs serve as social and dining organizations for the students who join them. Princeton's unofficial motto, \"In the Nation's Service and in the Service of All Nations,\" speaks to the university's commitment to community service.",
        "Tuition and fees": "$45,320",
        "In-state": "",
        "Undergrad Enrollment": "5,402"
    },
    {
        "Name": "Harvard University",
        "Location": "Cambridge",
        "State": "MA",
        "Rank": 2,
        "Description": "Harvard is located in Cambridge, Massachusetts, just outside of Boston. Harvard's extensive library system houses the oldest collection in the United States and the largest private collection in the world. There is more to the school than endless stacks, though: Harvard's athletic teams compete in the Ivy League, and every football season ends with \"The Game,\" an annual matchup between storied rivals Harvard and Yale. At Harvard, on-campus residential housing is an integral part of student life. Freshmen live around the Harvard Yard at the center of campus, after which they are placed in one of 12 undergraduate houses for their remaining three years. Although they are no longer recognized by the university as official student groups, the eight all-male \"final clubs\" serve as social organizations for some undergraduate students; Harvard also has five female clubs.",
        "Tuition and fees": "$47,074",
        "In-state": "",
        "Undergrad Enrollment": "6,699"
    },
    {
        "Name": "University of Chicago",
        "Location": "Chicago",
        "State": "IL",
        "Rank": 3,
        "Description": "The University of Chicago, situated in Chicago's Hyde Park community, offers a rich campus life in a big-city setting. The Chicago Maroons have more than 15 NCAA Division III teams, which compete in the University Athletic Association, and have strong basketball and wrestling programs. At Chicago, freshmen are required to live on campus, and more than 50 percent of students choose to remain on campus, while others live in off-campus apartments and houses. On-campus students are placed in \"houses\" within their dorm, which serve as tight-knit communities and provide academic and social support. Chicago offers more than 400 student organizations.",
        "Tuition and fees": "$52,491",
        "In-state": "",
        "Undergrad Enrollment": "5,844"
    },
    {
        "Name": "Yale University",
        "Location": "New Haven",
        "State": "CT",
        "Rank": 3,
        "Description": "Yale University, located in New Haven, Connecticut, is known for its excellent drama and music programs, which reach outside the classroom with student organizations such as the Yale Whiffenpoofs, a famous a cappella group, and the Yale Dramatic Association. The Yale Bulldogs compete in the Ivy League and are well known for their rivalry with Harvard. Students are assigned to live in one of 12 residential colleges during their time at Yale. Each college has a master and dean who live in the college and eat with students in the dining halls. Cultural houses provide a space for students to build a sense of cultural identity on campus.",
        "Tuition and fees": "$49,480",
        "In-state": "",
        "Undergrad Enrollment": "5,532"
    },
    {
        "Name": "Columbia University",
        "Location": "New York",
        "State": "NY",
        "Rank": 5,
        "Description": "Columbia University, located in Manhattan's Morningside Heights neighborhood in New York City, offers a wide range of student activities. The Columbia Lions field more than 25 NCAA Division I teams in the Ivy League. More than 90 percent of students live in on-campus housing, ranging from traditional residence halls to university-owned brownstones. Many of the brownstones are populated by the more than 25 Greek fraternity and sorority chapters on campus, whose membership includes about 10 percent of the student body. Organizations such as Urban New York, which gives out free tickets to city events, foster student interaction with life in the Big Apple.",
        "Tuition and fees": "$55,056",
        "In-state": "",
        "Undergrad Enrollment": "6,102"
    },
    {
        "Name": "Stanford University",
        "Location": "Stanford",
        "State": "CA",
        "Rank": 5,
        "Description": "Stanford University's pristine campus is located in California's Bay Area, about 30 miles from San Francisco. Stanford offers a wide range of student organizations, including the Stanford Pre-Business Association and Stanford Solar Car Project, which designs, builds and races a solar car every two years. The Stanford Cardinals are well known for the traditional \"Big Game\" against Cal, an annual football competition that awards the Stanford Axe--a sought-after trophy--to the victor. Stanford also has successful programs in tennis and golf. Only freshman are required to live on campus, but students are guaranteed housing for all four years and most choose to remain on campus. Greek life at Stanford represents approximately 10 percent of the student body.",
        "Tuition and fees": "$47,940",
        "In-state": "",
        "Undergrad Enrollment": "6,999"
    },
    {
        "Name": "Massachusetts Institute of Technology",
        "Location": "Cambridge",
        "State": "MA",
        "Rank": 7,
        "Description": "MIT is located in Cambridge, Massachusetts, across the Charles River from downtown Boston. Only freshmen students are required to live on campus, but about 70 percent of students choose to remain on campus during their four years. MIT offers housing in one of the coolest dorms in the country, commonly called \"The Sponge,\" designed by architect Steven Holl. The MIT Engineers boast more than 30 NCAA Division III teams, and their mascot is a beaver, which MIT chose because of its \"remarkable engineering and mechanical skill and its habits of industry.\" Each class designs a unique ring called the \"Brass Rat\" that is revealed during sophomore year, a tradition that dates back to 1929.",
        "Tuition and fees": "$48,452",
        "In-state": "",
        "Undergrad Enrollment": "4,527"
    },
    {
        "Name": "Duke University",
        "Location": "Durham",
        "State": "NC",
        "Rank": 8,
        "Description": "Durham, North Carolina, which surrounds Duke's campus, offers a variety of activities including shopping, dining and entertainment. Its \"Bull City\" nickname comes from the Blackwell Tobacco Company's Bull Durham Tobacco. Students at Duke are required to live on campus for their first three years, and freshmen live together on the East Campus. The Duke Blue Devils maintain a fierce rivalry with the University of North Carolina--Chapel Hill Tar Heels and are best known for their outstanding men's basketball program, one of the top five winningest college basketball programs in the country. Approximately 30 percent of the student body is affiliated with Greek life, which encompasses more than 30 fraternities and sororities.",
        "Tuition and fees": "$51,265",
        "In-state": "",
        "Undergrad Enrollment": "6,639"
    },
    {
        "Name": "University of Pennsylvania",
        "Location": "Philadelphia",
        "State": "PA",
        "Rank": 8,
        "Description": "The University of Pennsylvania, located in Philadelphia, was founded by Benjamin Franklin. The Penn Quakers have more than 25 NCAA Division I sports that compete in the Ivy League, and are noted for successful basketball and lacrosse teams. Penn offers housing in more than 10 College Houses, but many students live in the numerous off-campus apartments and houses available. More than 25 percent of the student body is involved in Greek life, which encompasses about 45 fraternities and sororities. The school also offers a number of clubs and organizations, ranging from performance groups like the Latin and Ballroom dance club to student publications such as the Penn Political Review. Penn works closely with the West Philadelphia area through community service and advocacy groups.",
        "Tuition and fees": "$51,464",
        "In-state": "",
        "Undergrad Enrollment": "9,726"
    },
    {
        "Name": "Johns Hopkins University",
        "Location": "Baltimore",
        "State": "MD",
        "Rank": 10,
        "Description": "Johns Hopkins University has four main campuses in and around Baltimore. The Homewood Campus, located next to the eclectic neighborhood of Charles Village, is the primary campus for undergraduates, and three other campuses house various graduate schools. Hopkins also has three additional campuses for its School of Advanced International Studies (SAIS) in Washington, D.C.; Bologna, Italy; and Nanjing, China. The Hopkins Blue Jays compete in the NCAA Division III Centennial Conference, but they are perhaps best known for their consistently dominant men's lacrosse team, which competes in NCAA Division I competitions. Freshmen and sophomores are required to live in on-campus residences. There is a sizeable Greek community with a membership of more than 1,000 students.",
        "Tuition and fees": "$50,410",
        "In-state": "",
        "Undergrad Enrollment": "6,524"
    },
    {
        "Name": "Dartmouth College",
        "Location": "Hanover",
        "State": "NH",
        "Rank": 11,
        "Description": "Dartmouth College, located in Hanover, New Hampshire, offers a wide range of student activities. Nearly 25 percent of students participate in Dartmouth's NCAA Division I varsity sports. More than 90 percent of students live in on-campus housing, which includes residence halls, fraternity and sorority houses, college-approved coeds and undergraduate societies. Approximately 60 percent of students are members of Greek organizations, which serve as the hubs of social life at Dartmouth. The Outing Club - the oldest and largest collegiate outing club in the country - is the most popular student organization at Dartmouth, offering outdoor activities, expeditions, gear rentals and courses.",
        "Tuition and fees": "$51,438",
        "In-state": "",
        "Undergrad Enrollment": "4,307"
    },
    {
        "Name": "California Institute of Technology",
        "Location": "Pasadena",
        "State": "CA",
        "Rank": 12,
        "Description": "Caltech, which focuses on science and engineering, is located in Pasadena, California, approximately 11 miles northeast of Los Angeles. Social and academic life at Caltech centers on the eight student houses, which the school describes as \"self-governing living groups.\" Student houses incorporate an admired Caltech tradition: dinners served by student waiters. Only freshmen are required to live on campus, but around 80 percent of students remain in their house for all four years. The Caltech Beavers have a number of NCAA Division III teams that compete in the Southern California Intercollegiate Athletic Conference. Integral to student life is the Honor Code, which dictates that \"No member of the Caltech community shall take unfair advantage of any other member of the Caltech community.",
        "Tuition and fees": "$47,577",
        "In-state": "",
        "Undergrad Enrollment": "1,001"
    },
    {
        "Name": "Northwestern University",
        "Location": "Evanston",
        "State": "IL",
        "Rank": 12,
        "Description": "What began as farmland and swampland in the 1850s became the Northwestern campus and the city of Evanston, Ill. Northwestern University is a Division I school in the Big Ten athletic conference. Northwestern's women's lacrosse team has won multiple NCAA national championships. The school has hundreds of campus organizations fulfill students' varied interests. Freshmen are guaranteed on-campus housing if requested in their applications. The school's 11 residential colleges offer thematic living quarters for social and academic programming. Northwestern's main campuses are located along Lake Michigan in Evanston and Chicago. In 2008, Northwestern opened a third branch in Doha, Qatar.",
        "Tuition and fees": "$50,855",
        "In-state": "",
        "Undergrad Enrollment": "8,314"
    },
    {
        "Name": "Brown University",
        "Location": "Providence",
        "State": "RI",
        "Rank": 14,
        "Description": "Located atop College Hill in Providence, R.I., Brown University has a college-town feel with Thayer Street serving as a center of activity for shopping and dining. The Brown Bears have about 35 NCAA Division I athletic teams and compete in the Ivy League. The Bears are well known for their men's soccer team, which consistently ranks among the top 25 teams in the nation. All students at Brown are required to live on campus for their first six semesters, and housing options include traditional singles, doubles and suites. With around 400 student organizations on campus ranging from The Brown Jug comedy magazine to Brown Ballroom Dance, students can find a way to pursue their interests. Brown also has a small but vibrant Greek community with approximately 10 chapters, including a few co-ed Greek organizations.",
        "Tuition and fees": "$51,367",
        "In-state": "",
        "Undergrad Enrollment": "6,652"
    },
    {
        "Name": "Cornell University",
        "Location": "Ithaca",
        "State": "NY",
        "Rank": 15,
        "Description": "Cornell University, located in Ithaca, New York, has more than 1,000 student organizations on campus, which range from the Big Red Marching Band to the International Affairs Society. First-year students live together on north campus, and the university has housing options for upperclassmen and graduate students, though many choose to live off campus. Cornell has a thriving Greek life, with more than 60 fraternity and sorority chapters. Cornell has more than 30 NCAA Division I varsity teams that compete in the Ivy League. The Cornell Big Red are perhaps best known for their successful men's lacrosse team, which won nine consecutive Ivy League titles from 2003 to 2011. Cornell also has a strong hockey program.",
        "Tuition and fees": "$50,953",
        "In-state": "",
        "Undergrad Enrollment": "14,315"
    },
    {
        "Name": "Rice University",
        "Location": "Houston",
        "State": "TX",
        "Rank": 15,
        "Description": "Rice University, located in the heart of Houston's Museum District, offers a dynamic student life in the nation's fourth-largest city. The Rice Coffeehouse, Valhalla Pub and Willy's Pub are all student-run institutions offering on-campus food and drink. Before stepping foot on campus, all students are assigned to one of 11 residential colleges, of which they remain members even if they decide to move off campus. The residential colleges provide housing, dining, and academic and social events. The Rice Owls boast 14 varsity NCAA Division I athletic teams and are well known for their strong baseball program. Students receive free tickets to all varsity athletic events.",
        "Tuition and fees": "$43,918",
        "In-state": "",
        "Undergrad Enrollment": "3,910"
    },
    {
        "Name": "University of Notre Dame",
        "Location": "Notre Dame",
        "State": "IN",
        "Rank": 15,
        "Description": "Notre Dame is located in South Bend, Ind., just 100 miles outside of Chicago. Only freshmen are required to live on campus, but most students choose to remain on campus in one of the 29 single-sex residence halls. The halls serve as the centers of social life at Notre Dame, as there is no Greek life on campus. Legends, an on-campus restaurant and pub, is a popular spot for watching sporting events. The Notre Dame \"Fighting Irish\" boast more than 25 varsity NCAA Division I athletic teams and are well known for their consistently strong football program. Over half of students study abroad for at least one semester.",
        "Tuition and fees": "$49,685",
        "In-state": "",
        "Undergrad Enrollment": "8,462"
    },
    {
        "Name": "Vanderbilt University",
        "Location": "Nashville",
        "State": "TN",
        "Rank": 15,
        "Description": "Vanderbilt University offers a wide range of student activities. Located in Nashville, or Music City, there are plenty of off-campus options for dining, shopping, music and entertainment. On campus, Greek organizations play a big role in social life, with approximately 40 percent of students affiliated with Greek life. All undergraduate students at Vanderbilt are required to live on campus, and freshmen live together in The Commons, which has six LEED certified green dorms. The Commodores, named for Vanderbilt founder \"Commodore\" Cornelius Vanderbilt, have teams in the NCAA Division I Southeastern Conference. About 35 percent of students take advantage of Vanderbilt's study abroad programs, which are offered in more than 35 countries.",
        "Tuition and fees": "$45,610",
        "In-state": "",
        "Undergrad Enrollment": "6,883"
    },
    {
        "Name": "Washington University in St. Louis",
        "Location": "St. Louis",
        "State": "MO",
        "Rank": 19,
        "Description": "Washington University in St. Louis is located in a city that offers professional sports in football, baseball and hockey in addition to a wide range of options for dining and entertainment. The Wash U Bears are members of the NCAA Division III University Athletic Association. Freshmen are required to live on campus in one of the residence houses. After freshman year, students can choose to live in suite-style housing, on-campus apartments, fraternity houses or off-campus apartments and homes. Approximately 25 percent of students are affiliated with Greek life at Wash U.",
        "Tuition and fees": "$49,770",
        "In-state": "",
        "Undergrad Enrollment": "7,504"
    },
    {
        "Name": "Emory University",
        "Location": "Atlanta",
        "State": "GA",
        "Rank": 20,
        "Description": "Emory University is located in the suburb of Druid Hills near downtown Atlanta. First- and second-year students are required to live on campus, but a majority of students choose to remain on campus for all four years. The Student Programming Council organizes events and performances throughout the year and has brought entertainers and musicians such as Tracy Morgan, Sean Kingston and Guster to campus in past years. A popular organization among students is Volunteer Emory, which oversees community service activities. The Emory Eagles have nearly 20 NCAA Division III varsity teams and are well known for their successful swimming and diving team. In addition to varsity athletics, all students are required to take two courses in physical education. There is a thriving Greek community at Emory with a number of fraternity and sorority chapters.",
        "Tuition and fees": "$47,954",
        "In-state": "",
        "Undergrad Enrollment": "6,867"
    },
    {
        "Name": "Georgetown University",
        "Location": "Washington",
        "State": "DC",
        "Rank": 20,
        "Description": "Georgetown University is situated overlooking the Potomac River just a few minutes from downtown Washington. There are numerous traditional residence halls, and freshmen and sophomores are required to live on campus. Other students choose to live in the townhouses and apartments surrounding campus. Student organizations on campus include religious groups, media outlets and student government. The Georgetown Hoyas are part of the NCAA's Division I and are well known for their dominant men's basketball team, which maintains a fierce rivalry with Syracuse University and plays most home games at the Verizon Center, also home to the Washington Wizards. The popular chant \"hoya saxa,\" a mix of ancient Greek and Latin that means \"what rocks,\" gained prominence in 1920 and - contrary to popular belief - has nothing to do with Georgetown's mascot, Jack the Bulldog.",
        "Tuition and fees": "$50,547",
        "In-state": "",
        "Undergrad Enrollment": "7,562"
    },
    {
        "Name": "University of California--Berkeley",
        "Location": "Berkeley",
        "State": "CA",
        "Rank": 20,
        "Description": "The University of California--Berkeley, often referred to as Cal, is situated overlooking the San Francisco Bay. Typically, 95 percent or more of incoming freshmen at Berkeley choose to live on campus. There are more than 1,000 student organizations, ranging from political groups to a hang gliding club and everything in between. Berkeley also has a thriving Greek life with dozens of fraternity and sorority chapters. The California Golden Bears, Berkeley's athletic teams, compete in the Pac-12 Conference and are known for their traditional arch rivalry with Stanford University.",
        "Tuition and fees": "$40,191",
        "In-state": "$13,509",
        "Undergrad Enrollment": "27,496"
    },
    {
        "Name": "University of Southern California",
        "Location": "Los Angeles",
        "State": "CA",
        "Rank": 23,
        "Description": "The University of Southern California's central campus, referred to as the University Park campus, is located in Los Angeles's Downtown Arts and Education Corridor. USC has other campuses in L.A. in addition to sites around Southern California and in Sacramento, Calif., and Washington. Students can participate in the more than 700 on-campus organizations, ranging from religious groups to club sports. USC students are not required to live on campus, but the university offers housing in its 40 or so residence halls and apartment buildings. A thriving Greek life comprises more than 60 chapters representing more than 3,500 students. The USC Trojans compete in the Pac-12 Conference and are known for their legendary football program.",
        "Tuition and fees": "$52,217",
        "In-state": "",
        "Undergrad Enrollment": "18,810"
    },
    {
        "Name": "Carnegie Mellon University",
        "Location": "Pittsburgh",
        "State": "PA",
        "Rank": 24,
        "Description": "Carnegie Mellon University, founded by industrialist and philanthropist Andrew Carnegie, is located in Pittsburgh, which offers dining and entertainment options as well as professional sports teams including the Penguins (hockey), Steelers (football) and Pirates (baseball). Only freshmen are required to live on campus, but the university guarantees housing for all four years, and the majority of students choose to remain on campus. Nearly 20 percent of the student population is affiliated with Greek life, which consists of more than 20 fraternities and sororities. The Carnegie Mellon Tartans compete in NCAA Division III competitions, and the Kiltie Band, which sports full Scottish regalia, performs at every home football game.",
        "Tuition and fees": "$52,040",
        "In-state": "",
        "Undergrad Enrollment": "6,454"
    },
    {
        "Name": "University of California--Los Angeles",
        "Location": "Los Angeles",
        "State": "CA",
        "Rank": 24,
        "Description": "The University of California--Los Angeles, commonly referred to as UCLA, is located in the Westwood neighborhood of L.A., just five miles from the Pacific Ocean. UCLA guarantees housing for three years. Students can join any of the more than 800 student organizations, including 60 or so Greek chapters, which represent about 13 percent of the student body. The university has a number of student media groups including a newspaper, magazine, and radio and TV stations. The UCLA Bruins compete in the Pac-12 Conference of NCAA's Division I and are well known for their successful men's and women's water polo teams. The Bruins' football team plays its home games at the famous Rose Bowl stadium in nearby Pasadena.",
        "Tuition and fees": "$39,518",
        "In-state": "$12,836",
        "Undergrad Enrollment": "29,585"
    },
    {
        "Name": "University of Virginia",
        "Location": "Charlottesville",
        "State": "VA",
        "Rank": 24,
        "Description": "Founded by Thomas Jefferson, the University of Virginia is located in Charlottesville. It's referred to among insiders as Mr. Jefferson's University or simply The University. Only first-year students are required to live on campus, and many upperclassmen live in off-campus apartments or fraternity and sorority houses. Greek life is prominent at UVA with a membership that includes approximately 30 percent of the student body. The Cavaliers, known unofficially as Wahoos or ���Hoos, are members of the NCAA Division I Atlantic Coast Conference and are well known for their consistently dominant men's and women's lacrosse teams.",
        "Tuition and fees": "$45,066",
        "In-state": "$15,722",
        "Undergrad Enrollment": "16,736"
    },
    {
        "Name": "Tufts University",
        "Location": "Medford",
        "State": "MA",
        "Rank": 27,
        "Description": "Tufts University is located in the Medford/Somerville area of Massachusetts, not far from downtown Boston. Tufts has additional campuses in Boston's Chinatown neighborhood, where its health sciences program is located, and in the suburb of Grafton, home to the Cummings School of Veterinary Medicine. All freshmen and sophomores are required to live on campus in dorms, suites or university-owned houses or apartments. Some student groups are the Cycling Club; the Beelzebubs, an all-male a cappella group; and the Freethought Society. About half of the student body participates in study abroad programs, and approximately 15 percent of students are affiliated with Greek life. Tufts' official mascot, Jumbo the elephant, is the only school mascot listed in Webster's Dictionary.",
        "Tuition and fees": "$52,430",
        "In-state": "",
        "Undergrad Enrollment": "5,290"
    },
    {
        "Name": "University of Michigan--Ann Arbor",
        "Location": "Ann Arbor",
        "State": "MI",
        "Rank": 27,
        "Description": "The University of Michigan boasts one of the best college towns in the country: Ann Arbor, only 45 minutes from the city of Detroit. Freshmen are guaranteed housing but are not required to live on campus. Nearly 20 percent of the undergraduate student body is affiliated with Greek life at Michigan, which contains approximately 60 fraternity and sorority chapters. If Greek life does not sound appealing, there are more than 900 other student organizations from which to choose. The Michigan Wolverines have many traditions: Their colors are maize and blue, their widely known chant is \"Go Blue!,\" their stadium is called the \"Big House,\" and their football program, known for its fierce rivalry with Ohio State, is one of the most storied teams in college football.",
        "Tuition and fees": "$43,476",
        "In-state": "$13,856",
        "Undergrad Enrollment": "28,312"
    },
    {
        "Name": "Wake Forest University",
        "Location": "Winston-Salem",
        "State": "NC",
        "Rank": 27,
        "Description": "Wake Forest University is located in Winston-Salem, North Carolina, just a few hours by car from skiing in the Blue Ridge Mountains or relaxing on the beaches of South Carolina. Campus Recreation offers intramural sports and outdoor trips such as kayaking on the New River, hang-gliding and sky-diving. The Demon Deacons, Wake's athletic teams, are members of the NCAA Division I Atlantic Coast Conference. When Wake Forest played rival Duke University in 1922 and won, a local reporter described the Wake players as \"Demon Deacons,\" and thus, the mascot was born. Students must live on campus for six semesters in one of the residence halls. Greek organizations play a big role at Wake Forest, with a membership consisting of almost half of the student body.",
        "Tuition and fees": "$49,308",
        "In-state": "",
        "Undergrad Enrollment": "4,871"
    },
    {
        "Name": "University of North Carolina--Chapel Hill",
        "Location": "Chapel Hill",
        "State": "NC",
        "Rank": 30,
        "Description": "The University of North Carolina--Chapel Hill, often referred to as UNC, offers a wide range of student activities. Popular student organizations include The Daily Tarheel, UNC's student newspaper, and WXYC, the student-run radio station. More than 3,000 students are members of Greek life. Chapel Hill, which surrounds UNC, is often considered one of the best college towns in the country, offering music, restaurants and shopping. Almost half of all undergraduates live on campus in one of the residence halls or apartment complexes. The North Carolina Tar Heels are members of the Atlantic Coast Conference and are known for their men's basketball team, which maintains a storied rivalry with nearby institution Duke University and is one of the most successful programs in college basketball. Former players include Michael Jordan and Vince Carter.",
        "Tuition and fees": "$33,916",
        "In-state": "$8,834",
        "Undergrad Enrollment": "18,415"
    },
    {
        "Name": "Boston College",
        "Location": "Chestnut Hill",
        "State": "MA",
        "Rank": 31,
        "Description": "Boston College was founded by the Society of Jesus and has maintained its Roman Catholic Jesuit religious affiliation. B.C. competes in nearly 30 NCAA Division I varsity sports in the Atlantic Coast Conference. The B.C. Eagles have one of the highest graduation rates for their student-athletes in the country. There are no fraternities or sororities on campus, however the school has more than 200 clubs and organizations. Freshmen are not required to live on campus, but the majority choose to do so. B.C. is located in Chestnut Hill, Mass., which is six miles west of downtown Boston, and its main campus is listed on the National Register of Historic Places.",
        "Tuition and fees": "$51,296",
        "In-state": "",
        "Undergrad Enrollment": "9,192"
    },
    {
        "Name": "College of William & Mary",
        "Location": "Williamsburg",
        "State": "VA",
        "Rank": 32,
        "Description": "The College of William and Mary is second oldest college in the country. It was founded by King William III and Queen Mary II of England. The school's NCAA Division I varsity sports teams, known as the \"Tribe,\" participate in the Colonial Athletic Association. Students are involved with the Phi Beta Kappa fraternity, the nation's first academic Greek society, as well as other fraternities and sororities on campus. All freshmen are required to live on campus and the majority of upperclassmen live on campus as well. The school is located in historic downtown Williamsburg, Va.",
        "Tuition and fees": "$41,718",
        "In-state": "$18,687",
        "Undergrad Enrollment": "6,301"
    },
    {
        "Name": "University of Rochester",
        "Location": "Rochester",
        "State": "NY",
        "Rank": 32,
        "Description": "The University of Rochester describes itself as one of the smallest and most collegiate schools among the nation's top research universities. The Yellowjackets mainly compete in the University Athletic Association and participate in NCAA Division III sports. The school also offers more than 200 student organizations, and about one quarter of students are affiliated with Greek life on campus. Rochester's a cappella ensembles are among the country's best. Freshmen and sophomores are required to live on campus, and two-thirds of the juniors and more than half of the seniors choose to remain on campus. Rochester's main campus is located two miles south of downtown Rochester, N.Y., in the bend of the Genesee River.",
        "Tuition and fees": "$50,142",
        "In-state": "",
        "Undergrad Enrollment": "6,304"
    },
    {
        "Name": "Brandeis University",
        "Location": "Waltham",
        "State": "MA",
        "Rank": 34,
        "Description": "Brandeis University is located in Waltham, Mass., just nine miles west of Boston. Students are guaranteed housing for their first four semesters. In addition to student-run TV and radio stations, Brandeis has religious and performance groups, service organizations, cultural awareness groups, performance groups and more. The Shapiro Campus Center serves as a hub of student activity on campus, housing a theater, bookstore, cafe, library, meeting rooms and a student art gallery. Cholmondeley's, the campus coffeehouse, is another hotspot for concerts and comedy shows. The Brandeis Judges field more than 15 NCAA Division III teams and are known for their strong men's soccer team. There is no Greek life on campus.",
        "Tuition and fees": "$51,570",
        "In-state": "",
        "Undergrad Enrollment": "3,621"
    },
    {
        "Name": "Georgia Institute of Technology",
        "Location": "Atlanta",
        "State": "GA",
        "Rank": 34,
        "Description": "Georgia Tech, located in the heart of Atlanta, offers a wide range of student activities. The Georgia Tech Yellow Jackets, an NCAA Division I team, compete in the Atlantic Coast Conference and have a fierce rivalry with the University of Georgia. Since 1961, the football team has been led onto the field at home games by the Ramblin' Wreck, a restored 1930 Model A Ford Sport Coupe. Georgia Tech has a small but vibrant Greek community. Freshmen are offered housing, but aren't required to live on campus. In addition to its campuses in Atlanta and Savannah, Georgia Tech has campuses in France, Ireland, Costa Rica, Singapore and China.",
        "Tuition and fees": "$32,404",
        "In-state": "$12,212",
        "Undergrad Enrollment": "15,142"
    },
    {
        "Name": "New York University",
        "Location": "New York",
        "State": "NY",
        "Rank": 36,
        "Description": "New York University's primary campus is located in the lively Greenwich Village neighborhood of Manhattan. NYU is a true city school, with no borders separating a distinct campus from the streets of the Big Apple. Students are guaranteed housing for all four years in the many residence halls throughout Manhattan, but many upperclassmen choose to live off campus in apartments around the city. NYU has a small but active Greek life with more than 25 fraternity and sorority chapters. There are hundreds of student organizations on campus, such as NYU-TV, which operates both the University Channel and the Movie Channel to provide entertainment and information to the university community.",
        "Tuition and fees": "$49,062",
        "In-state": "",
        "Undergrad Enrollment": "25,722"
    },
    {
        "Name": "Case Western Reserve University",
        "Location": "Cleveland",
        "State": "OH",
        "Rank": 37,
        "Description": "Case Western Reserve University is known for its world class research, but with more than 150 student organizations, there are plenty of opportunities to get involved outside the classroom, too. The Case Western Spartans varsity teams compete in the Division III University Athletic Association. The Greek system, which stresses a commitment to on-campus and community service, involves about one third of students. The campus is located about 20 minutes from downtown Cleveland, where students have free access to a handful of downtown museums like the Rock and Roll Hall of Fame and the Great Lakes Science Center. On campus, freshmen live in one of four themed residential communities, which are called Cedar, Juniper, Magnolia and Mistletoe. All students are invited to the annual SpringFest, a collection of music, carnival games and activities that is the largest student-run event on campus.",
        "Tuition and fees": "$46,006",
        "In-state": "",
        "Undergrad Enrollment": "5,121"
    },
    {
        "Name": "University of California--Santa Barbara",
        "Location": "Santa Barbara",
        "State": "CA",
        "Rank": 37,
        "Description": "Located 100 miles up the coast from Los Angeles, the University of California--Santa Barbara sits atop cliffs overlooking the Pacific Ocean. Students can get involved in any of the more than 400 clubs and organizations on campus, including a Greek community that comprises about 10 percent of undergraduate students. UCSB provides housing to about 30 percent of students in eight residence halls and several university apartment complexes.The UC Santa Barbara Gauchos compete primarily in the NCAA Division I Big West Conference and are known for their successful women's basketball and men's soccer teams. Non-varsity students can join a club team such as cycling, surfing, rugby or ski and snowboard.",
        "Tuition and fees": "$40,704",
        "In-state": "$14,022",
        "Undergrad Enrollment": "20,607"
    },
    {
        "Name": "Boston University",
        "Location": "Boston",
        "State": "MA",
        "Rank": 39,
        "Description": "Boston University is one of the largest independent, nonprofit universities in the country. The BU Terriers have more than 20 NCAA Division I varsity sports. BU's hockey team has won multiple NCAA national championships. BU also has nearly 500 student clubs, ranging from Ski Racing to the Juggling Association. BU created one of the first study abroad programs, and currently sponsors more than 90 international programs. Freshmen are required to live on campus, and about 80 percent of undergraduate students live on the main Boston campus, which lies along the Charles River.",
        "Tuition and fees": "$50,240",
        "In-state": "",
        "Undergrad Enrollment": "17,932"
    },
    {
        "Name": "Northeastern University",
        "Location": "Boston",
        "State": "MA",
        "Rank": 39,
        "Description": "At Northeastern University, students gain substantial work experience before receiving their diplomas. About 90 percent of Northeastern undergraduates complete at least one professional co-op during their college career, working for one of more than 2,000 employers around the world, such as GEICO and MTV. Students can choose to complete their degree in four years, with the potential for two co-ops, or five years, building in time for three co-ops. Outside of the classroom and workplace, there are more than 300 clubs and organizations for students, including about 25 fraternities and sororities. The Northeastern Huskies compete in the NCAA Division I Colonial Athletic Conference. More than 3,000 students compete at the club and intramural sport level. Freshmen and sophomores are required to live on campus. Northeastern's campus is spread out across 73 acres in the venerable college town of Boston. Northeastern has its own stop on Boston's subway system, commonly called the T. The city, home to myriad colleges, is steeped in American history and full of activities for students.",
        "Tuition and fees": "$47,655",
        "In-state": "",
        "Undergrad Enrollment": "13,697"
    },
    {
        "Name": "Rensselaer Polytechnic Institute",
        "Location": "Troy",
        "State": "NY",
        "Rank": 39,
        "Description": "Rensselaer Polytechnic Institute was founded on the principles of bringing science to everyday life, and that ethos is still prevalent today. About a quarter of students are involved in Greek L.I.F.E., as the fraternity and sorority scene is known at the school, which stresses Leadership, Innovation, Fortitude and Evolution. More students - about three fourths - play sports at the varsity, club or intramural level. True to the school's mission, the varsity athletes are known as the Engineers, and compete in the Eastern College Athletic Conference and the Liberty League. There are also more than 175 student organizations. Freshmen must live on campus, usually in dormitories that only house first-year students. RPI's campus, in Troy, N.Y., is nestled in an ideal location for nature lovers. The school overlooks the Hudson River, where waterfront activities abound, and is close to Grafton Lakes State Park, Lake George and the Adirondack Mountains. For an urban experience, Albany is 9 miles away.",
        "Tuition and fees": "$50,797",
        "In-state": "",
        "Undergrad Enrollment": "5,864"
    },
    {
        "Name": "Tulane University",
        "Location": "New Orleans",
        "State": "LA",
        "Rank": 39,
        "Description": "At Tulane University, located in New Orleans, students can experience a thriving -- and re-establishing -- city that is known for more than just its raucous Mardi Gras celebrations. The school is divided between an Uptown campus, its main location, and a Downtown campus, the center for health science programs. The French Quarter, about four miles from the main campus, is a popular tourist spot known for its music scene, nightlife and shopping. Freshmen and sophomores must live on campus, unless a student lives locally with parents, is married or is older than 21. There are more than 200 student organizations on campus, including about 20 sororities and fraternities. About a quarter of students are involved in the Greek system. The Tulane Green Wave sports teams compete in the Division I American Athletic Conference, and the school's colors are olive green and blue. Through Tulane After Dark, students can choose from a variety of evening activities such as concerts, comedy shows and murder mystery parties. Since Hurricane Katrina, hundreds of students a year have volunteered in community service efforts to rebuild the city.",
        "Tuition and fees": "$51,010",
        "In-state": "",
        "Undergrad Enrollment": "6,662"
    },
    {
        "Name": "University of California--Irvine",
        "Location": "Irvine",
        "State": "CA",
        "Rank": 39,
        "Description": "On the sunny campus of the University of California--Irvine, students don't have far to go to decompress after class. The Pacific Ocean is a quick 5-mile trip away, attracting surfers, sailors and sunbathers alike. Seated in Orange County, the bustling campus is home to more than 500 student organizations, including nearly 50 fraternities and sororities. The UC--Irvine Anteaters compete at the Division I level in the Big West Conference, cheered on by non-traditional mascot Peter the Anteater and a group of student fans called Eater Nation. While UC Irvine is known as a commuter school, university officials have tried to combat that status by offering more on-campus residence options. Freshmen are not required to live on campus, but more than three-fourths of first-year students choose to do so. Getting around UC Irvine is easy with the school's ZotWheels, a fleet of blue and gold bicycles that students can pick up and ride to four campus locations. Commuters looking to be more energy efficient can carpool to campus with other students through the university's Zimride Rideshare Community.",
        "Tuition and fees": "$39,458",
        "In-state": "$14,750",
        "Undergrad Enrollment": "25,256"
    },
    {
        "Name": "Lehigh University",
        "Location": "Bethlehem",
        "State": "PA",
        "Rank": 44,
        "Description": "Lehigh University is located in Bethlehem, Pa., 50 miles north of Philadelphia and 75 miles west of New York City. The Lehigh Mountain Hawks are members of the Patriot League, and compete in 25 NCAA Division I sports. Their biggest athletic rivalry is Lafayette College, located less than 20 miles away. A third of the student body is involved in fraternities and sororities. All freshmen are required to live on campus, and sophomores are also required to live on campus in a residence hall or Greek housing. Lehigh's main campus is located on the wooded slope of South Mountain, and half of the campus is preserved as open space.",
        "Tuition and fees": "$48,320",
        "In-state": "",
        "Undergrad Enrollment": "5,075"
    },
    {
        "Name": "University of California--Davis",
        "Location": "Davis",
        "State": "CA",
        "Rank": 44,
        "Description": "The University of California--Davis, one of 10 schools in the University of California system, was originally established as a farm school for UC - Berkeley. Located just 15 miles from Sacramento, UC Davis's campus contains an airport, fire department and a collection of outdoor sculptures called Eggheads. There are more than 500 student organizations on campus in addition to a sizeable Greek community that comprises about 65 fraternity and sorority chapters. All freshmen are guaranteed housing, and after their first year students typically move off campus or live in university apartments. The UC Davis Aggies field more than 20 NCAA Division I teams, and students can join the Aggie Pack, the largest student spirit organization in the country.",
        "Tuition and fees": "$40,728",
        "In-state": "$14,046",
        "Undergrad Enrollment": "28,384"
    },
    {
        "Name": "University of California--San Diego",
        "Location": "La Jolla",
        "State": "CA",
        "Rank": 44,
        "Description": "The University of California--San Diego lies alongside the Pacific Ocean in the La Jolla community of San Diego. The UCSD Tritons compete in more than 20 NCAA Division II sports, mainly in the California Collegiate Athletic Association. The school has hundreds of student organizations, and the university hosts a thriving Greek community. All freshmen are eligible for guaranteed on-campus housing for two years, but they are not required to live on campus. The campus has an aquarium and is home to the Large High Performance Outdoor Shake Table, which tests structures' ability to withstand simulated earthquakes.",
        "Tuition and fees": "$41,387",
        "In-state": "$14,705",
        "Undergrad Enrollment": "26,590"
    },
    {
        "Name": "University of Illinois--Urbana-Champaign",
        "Location": "Champaign",
        "State": "IL",
        "Rank": 44,
        "Description": "The University of Illinois is located in the twin cities of Urbana and Champaign in east-central Illinois, only a few hours from Chicago, Indianapolis and St. Louis. The school's Fighting Illini participate in more than 20 NCAA Division I varsity sports and are part of the Big Ten Conference. The university boasts the largest Greek system in the world, and almost a quarter of the student body is involved. It's not hard to find something to do on campus with more than 1,000 student organizations, including professional, political and philanthropic clubs. All freshmen are required to live on campus.",
        "Tuition and fees": "$31,320",
        "In-state": "$15,698",
        "Undergrad Enrollment": "33,368"
    },
    {
        "Name": "University of Miami",
        "Location": "Coral Gables",
        "State": "FL",
        "Rank": 44,
        "Description": "Located in Southern Florida, the University of Miami has an ideal location for students who love the outdoors. With popular spots like South Beach, the Florida Keys and Everglades National Park nearby, students have plenty of opportunities for water sports, hiking and sunbathing. Downtown Miami, also near to the school, is a thriving sports and cultural center. On campus, more than 2,400 students are involved in more than 30 fraternities and sororities. Students can also choose from more than 250 clubs and organizations to join. Freshmen are not required to live on campus, but many opt to live in the school's five residential colleges. The communities, modeled after housing at England's Oxford and Cambridge universities, combine living and learning with group meals, poetry readings, sports and more. For students who do not live in university housing, the Commuter Assistant Program pairs freshmen with an on-campus representative to help ease the transition into college. University of Miami Division I sports teams are known as the Hurricanes and compete in the Coastal Division of the Atlantic Coast Conference. The school's mascot is Sebastian the Ibis, a species of marsh bird that is known for weathering tropical storms.",
        "Tuition and fees": "$47,004",
        "In-state": "",
        "Undergrad Enrollment": "11,122"
    },
    {
        "Name": "University of Wisconsin--Madison",
        "Location": "Madison",
        "State": "WI",
        "Rank": 44,
        "Description": "The University of Wisconsin--Madison lies along the southern shore of Lake Mendota in the city of Madison. The Wisconsin Badgers compete in more than 20 NCAA Division I sports and are part of the Big Ten Conference. Students can get involved in more than 800 organizations on campus. There is also an active Greek life and social scene on campus, evident in Wisconsin's reputation as one of the top party schools in the country. Freshmen are not required to live on campus, but many choose to do so. Students can opt to live in one of several residential communities where they learn and live with other students and faculty.",
        "Tuition and fees": "$32,738",
        "In-state": "$10,488",
        "Undergrad Enrollment": "31,662"
    },
    {
        "Name": "Pepperdine University",
        "Location": "Malibu",
        "State": "CA",
        "Rank": 50,
        "Description": "Squeezed in among the Santa Monica Mountain foothills, Pepperdine University is a Christian college known for its picturesque location in Malibu, Calif. The school upholds the New Testament-based traditions of the Churches of Christ. Students must attend 14 spiritual events a semester and take at least three religion courses during their time at Pepperdine. There is a Church of Christ on campus, as well as a handful of student-led ministries. Outside of church, the school's sports teams, the Pepperdine Waves, compete in the Division I West Coast Conference. Students can also play club sports, such as lacrosse and a triathlon group, and a variety of intramural sports, from dodgeball to beach volleyball. Freshmen and sophomores must live in university housing on the dry campus, and student spiritual life leaders live in each residence hall. About 25 percent of students are active in more than a dozen sororities and fraternities, though there is no official Greek housing on campus.",
        "Tuition and fees": "$50,022",
        "In-state": "",
        "Undergrad Enrollment": "3,533"
    },
    {
        "Name": "University of Florida",
        "Location": "Gainesville",
        "State": "FL",
        "Rank": 50,
        "Description": "The University of Florida is about two miles away from downtown Gainesville, a college town bolstered by the school's nearly 50,000 students. The Florida Gators sports teams compete in the NCAA Division I Southeastern Conference, and are supported by mascots Albert and Alberta the Alligators. The Gator football team, which competes in Ben Hill Griffin Stadium -- commonly called the \"The Swamp\" -- is particularly notorious. The team became the namesake of popular sports drink Gatorade in 1966, after freshmen Gators experimented with the novel beverage. The annual Gator Growl, held each Homecoming weekend, has been called the largest student-run pep rally in the world. About 15 percent of students are involved in the school's 60-plus fraternities and sororities. Freshmen do not have to live on campus, though about 80 percent opt to do so. All students can partake in Gator Nights, held every Friday, which offer free late-night entertainment and a free midnight breakfast.",
        "Tuition and fees": "$28,666",
        "In-state": "$6,389",
        "Undergrad Enrollment": "35,043"
    },
    {
        "Name": "Villanova University",
        "Location": "Villanova",
        "State": "PA",
        "Rank": 50,
        "Description": "Villanova University, named for the Spanish Augustinian St. Thomas of Villanova, is still affiliated with the Augustinian Order. Located just 12 miles from Philadelphia in the suburb of Radnor Township, Pennsylvania, Villanova - often shortened to 'Nova - offers popular student organizations like the Blue Key Society, which gives admissions tours and hosts prospective student days, and Rays of Sunshine, the student community service office. A thriving Greek community at Villanova encompasses about two dozen fraternities and sororities. Athletics are also important, and the Villanova Wildcats - known for their successful men's basketball program - mainly compete in the NCAA Division I Big East Conference. Incoming freshmen are guaranteed housing for their first three years in any of the 18 residence halls or eight apartment-style buildings.",
        "Tuition and fees": "$49,280",
        "In-state": "",
        "Undergrad Enrollment": "6,994"
    },
    {
        "Name": "Pennsylvania State University--University Park",
        "Location": "University Park",
        "State": "PA",
        "Rank": 50,
        "Description": "There is rarely a dull moment on the Pennsylvania State University--University Park campus, also known as Happy Valley. With around 950 clubs and organizations, there are broad opportunities to get involved in campus life. The school mascot is the Nittany Lion, and teams compete in the Division I Big 10 Conference. The football team plays in Beaver Stadium, which is one of the largest arenas in North America with room for more than 107,000 fans. Penn State is home to a thriving Greek system with nearly 90 sororities and fraternities. About 15,000 students volunteer in THON, the largest student-run philanthropy in the world. Students raise money for pediatric cancer research and awareness throughout the year and participate in a 46-hour dance marathon - no sitting or sleeping allowed. Freshmen must live in one of five housing areas on campus. Across the street from campus is State College, a bustling small town with an array of coffee shops, restaurants, shops and bars populated mostly by students. Surrounded by mountains, the school is also close to skiing, snowboarding and hiking opportunities.",
        "Tuition and fees": "$32,382",
        "In-state": "$17,900",
        "Undergrad Enrollment": "40,742"
    },
    {
        "Name": "Ohio State University--Columbus",
        "Location": "Columbus",
        "State": "OH",
        "Rank": 54,
        "Description": "Located in the state capital of Columbus, The Ohio State University is a sprawling school with seemingly endless opportunities for students to get involved. There are more than 1,000 clubs and organizations on campus, including about 65 fraternities and sororities. Sports are another big part of campus life, with the Ohio State Buckeyes competing in the NCAA Division I Big Ten Conference. The athletic teams are named after the state tree and cheered on by mascot Brutus Buckeye. The football stadium, which was completed in 1922, is listed in the National Register of Historic Places. All Ohio State freshmen must live in one of the more than 35 residence halls across campus, unless a student is from Central Ohio and can commute from home. The Ohio State First Year Experience offers freshmen orientation, mentors and special programming to ease the transition into college. Freshmen can also go on the school's community service spring break, a trip to Chicago that is only open to first-year students. Local community service opportunities are easy to find through the school's Pay It Forward program, which includes an online listing of volunteer events. Students can also study abroad in more than 40 countries through Ohio State.",
        "Tuition and fees": "$29,229",
        "In-state": "$10,037",
        "Undergrad Enrollment": "45,289"
    },
    {
        "Name": "University of Washington",
        "Location": "Seattle",
        "State": "WA",
        "Rank": 54,
        "Description": "Located in the University District neighborhood (known as the U District) just north of downtown Seattle, the University of Washington is a cutting-edge research university with a long-standing history as one of the oldest public institutions on the West Coast. Students can join one of the school's 500-plus student organizations, including about 50 sororities and fraternities, or can start a brand new club with at least four other students. University of Washington is known as a commuter school, and freshmen are not required to live on campus. Housing is not guaranteed for any student. For those that do reside in the residence halls, the university stresses \"living green\" through energy conservation and recycling. On the sports fields, the school's varsity athletes are competitive in the NCAA Division I Pac-12 Conference. The football team, in particular, is a traditional league stand-out. The teams are represented by two mascots: one, a costumed student known as Harry the Husky Dawg, and the other, Dubs, a live Alaskan husky. The university gym is free for students seeking a workout.",
        "Tuition and fees": "$34,791",
        "In-state": "$10,753",
        "Undergrad Enrollment": "31,063"
    },
    {
        "Name": "George Washington University",
        "Location": "Washington",
        "State": "DC",
        "Rank": 56,
        "Description": "George Washington University's urban location in downtown Washington, D.C., is ideal for fans of politics and city life. The school is spread out across the D.C. Foggy Bottom neighborhood, near the State Department and about a mile away from museums on the National Mall and the Washington Monument. Freshmen and sophomores are required to live on campus, and, starting with the Class of 2018, juniors are required to live on campus as well. The school's sports teams are nicknamed the Colonials, and compete in the Division I Atlantic 10 Conference. A costumed student called George, named for George Washington, is the school mascot, though an 10-foot inflatable character known as Big George and an on-campus statue of a hippopotamus are unofficial mascots. There are more than 400 organizations on campus, and students can start their own clubs with an original idea and nine other members. About 25 percent of students are involved in the school's large Greek system. The TRAiL program takes students on outdoor excursions like hiking, kayaking and horseback riding. Student publications include the GW Hatchet, The Daily Colonial and The GW Patriot.",
        "Tuition and fees": "$51,950",
        "In-state": "",
        "Undergrad Enrollment": "11,157"
    },
    {
        "Name": "Southern Methodist University",
        "Location": "Dallas",
        "State": "TX",
        "Rank": 56,
        "Description": "Despite its name, this private university in Dallas is a secular institution when it comes to classes. The school was founded by what became the United Methodist Church in 1911, but it is now home to students of many religious affiliations. Outdoor activities are plentiful in Dallas, a city that boasts an average of 232 days of sunshine a year. Students can check out the Dallas International Film Festival, which draws 40,000 viewers annually, or explore the more than 400 parks in the city. Students are required to live on campus for their first two years at SMU. The campus is also home to the George W. Bush Presidential Center, which comprises a Bush administration museum, library and public policy institute, and frequently hosts speakers. The SMU Mustangs sports teams play in the Division I American Athletic Conference, supported by mascot Peruna, a black stallion Shetland pony. About 2,000 students are involved in SMU Greek life, and all students can participate in annual events such as the Festival of Lights, a candlelit assembly on the school's Main Quad each December, and the Mane Event, a celebration of spring complete with bands and food.",
        "Tuition and fees": "$50,358",
        "In-state": "",
        "Undergrad Enrollment": "6,411"
    },
    {
        "Name": "University of Georgia",
        "Location": "Athens",
        "State": "GA",
        "Rank": 56,
        "Description": "At its founding, The University of Georgia made history as the first public, state-supported college in America. These days, the school is known for its vibrant student community. UGA's college town of Athens was rated among the best college towns in the country by U.S. News, and the competitive Bulldogs sports teams compete in the NCAA Division I Southeastern Conference. There are more than 600 student clubs and organizations, including about 60 Greek chapters that involve almost 25 percent of UGA students. Community service is a particularly big focus, with student-run philanthropies such as UGA Miracle, a yearlong fundraiser and 24-hour Dance Marathon for Children's Healthcare of Atlanta. First-year students must live on campus, but Atlanta is 60 miles away for those itching for a road trip.",
        "Tuition and fees": "$29,844",
        "In-state": "$11,634",
        "Undergrad Enrollment": "27,547"
    },
    {
        "Name": "University of Texas--Austin",
        "Location": "Austin",
        "State": "TX",
        "Rank": 56,
        "Description": "Everything is bigger in Texas, as the saying goes, and it holds true at the University of Texas--Austin, one of the largest schools in the nation. The school has one of the biggest Greek systems in the country, two of the largest student publications and more than 900 clubs and organizations for students. The UT--Austin sports teams are notorious competitors in the Division I Big 12 Conference, supported by mascot Bevo the Longhorn. The UT Tower, a lofty campus structure, is lit in the school's burnt orange color after notable sports achievements and glows a ��?1' when a team wins a national championship. Freshmen do not have to live on campus, and may choose to live in downtown Austin, situated about a quarter mile away. The vibrant city is known for its music, food, outdoor activities and nightlife, and students can travel for free on the capitol Metro buses with proof of ID.",
        "Tuition and fees": "$34,676",
        "In-state": "$9,806",
        "Undergrad Enrollment": "39,619"
    },
    {
        "Name": "Fordham University",
        "Location": "New York",
        "State": "NY",
        "Rank": 60,
        "Description": "At Fordham University, \"New York is [your] campus\" as the school's website says. With campuses throughout New York City, students live and learn in the thick of an urban experience. The school's original Bronx campus, Rose Hill, is in walking distance to the Bronx Zoo, New York Botanical Gardens and Little Italy. Today, Fordham has two more campuses: Lincoln Center, which is close to Central Park, and Westchester campus, which is in West Harrison, N.Y. Freshmen do not have to live on campus, but any student who is promised housing upon admittance to the school is guaranteed a room for four consecutive years. Students can travel between campuses on the school's Ram Van, a burgundy shuttle that runs every half hour. The van makes enough trips, the school has calculated, that it's covered a distance equivalent to traveling around the world 18.5 times a year. The Fordham Rams play in the NCAA Division I Atlantic 10 Conference. Fordham University, a Jesuit institution, does not have a Greek system.",
        "Tuition and fees": "$47,317",
        "In-state": "",
        "Undergrad Enrollment": "8,855"
    },
    {
        "Name": "Purdue University--West Lafayette",
        "Location": "West Lafayette",
        "State": "IN",
        "Rank": 60,
        "Description": "Purdue University's West Lafayette, Indiana, campus is the main campus in the Purdue University system, which encompasses four other campuses throughout the state. Nearly 20 percent of students are affiliated with Greek life, and Purdue offers a wide range of activities and organizations. Performance groups include the \"All American\" Marching Band, four jazz bands and two symphony orchestras. The Boilermakers, Purdue's athletic teams, compete in the Division I Big Ten Conference and are well known for their dominant men's and women's basketball teams. The Boilermaker Special, Purdue's official mascot, is a railroad locomotive cared for and maintained by the student-run Purdue Reamer Club. Although no students are required to live in university housing, about one-third of undergraduates live on campus.",
        "Tuition and fees": "$28,804",
        "In-state": "$10,002",
        "Undergrad Enrollment": "29,497"
    },
    {
        "Name": "Syracuse University",
        "Location": "Syracuse",
        "State": "NY",
        "Rank": 60,
        "Description": "Few schools are associated with a color as strongly as Syracuse University. A brilliant shade of orange is tied into campus life, manifesting itself in student media outlets such as The Daily Orange, the student-run newspaper, and CitrusTV, the television studio. The school's sports teams are known simply as The Orange, and compete in the NCAA Division I Atlantic Coast Conference, cheered on by school mascot Otto the Orange. The football team plays in Carrier Dome, famed as the only domed stadium in the Northeast. The school's campus sits on University Hill, above the sprawling city of Syracuse in central New York state. With about 100 inches of snowfall each year, the bitterly cold winters at Syracuse University give students plenty of opportunities for skiing, snowboarding and sledding on nearby mountains. On campus, there are more than 300 student clubs and organizations. About 20 percent of Syracuse students are involved in Greek life, though only juniors and seniors may live in Greek housing. All freshmen and sophomore students must live in on-campus housing. The free Connective Corridor bus shuttles transport students between campus and downtown Syracuse, where annual celebrations include a 12-day Winterfest and a Jazz Fest.",
        "Tuition and fees": "$45,022",
        "In-state": "",
        "Undergrad Enrollment": "15,196"
    },
    {
        "Name": "University of Connecticut",
        "Location": "Storrs",
        "State": "CT",
        "Rank": 60,
        "Description": "The University of Connecticut, located in Storrs, was originally known as the Storrs Agricultural School �_-- a fitting name for an institution surrounded by farmland. Storrs is a sleepy town about a 30-minute drive from Hartford; 60 minutes from Providence, R.I.; and 90 minutes from Boston. Without many activities off campus, students can get involved in the more than 450 clubs and organizations on campus, including more than 30 fraternities and sororities. They can also catch a film in the on-campus movie theater and skate for free in the school's ice rink. Sports are a major focus for students; the UConn Huskies compete in the NCAA Division I American Athletic Conference, in which UConn's basketball teams are especially ferocious competitors. Freshmen do not have to live on campus, though more than 70 percent of all undergraduates choose to do so. Each year before final exams, students gather for Spring Weekend, a fun-filled, multi-day celebration that began as the school's Campus Community Carnival in the 1940s.",
        "Tuition and fees": "$35,858",
        "In-state": "$14,066",
        "Undergrad Enrollment": "18,826"
    },
    {
        "Name": "University of Maryland--College Park",
        "Location": "College Park",
        "State": "MD",
        "Rank": 60,
        "Description": "Located between Washington, D.C., and Baltimore, the University of Maryland offers students a suburban lifestyle within easy reach of big-city experiences. The flagship campus in College Park, which has its own subway stop on the D.C.-area Metro transit system, is often considered a commuter school. Accordingly, freshmen do not have to live on campus. There are more than 800 clubs and organizations on campus, including about 35 fraternities and sororities that involve approximately 15 percent of the student population. Students looking for additional activities can visit the university's \"Free Stuff @ Maryland\" website, which offers a comprehensive listing of presentations, events and movie screenings with no admission charges. Sports also offer yearlong distractions. The Maryland Terrapins compete in the NCAA Division I Big Ten Conference. The mascot, Testudo, is a Diamondback terrapin -- a species of turtle that is the official state reptile. One of several Testudo sculptures on campus sits in front of McKeldin Library, and rubbing its nose is thought to bring good luck, particularly before exams.",
        "Tuition and fees": "$32,045",
        "In-state": "$10,181",
        "Undergrad Enrollment": "27,443"
    },
    {
        "Name": "Worcester Polytechnic Institute",
        "Location": "Worcester",
        "State": "MA",
        "Rank": 60,
        "Description": "Among the 10 colleges located in Worcester, Mass., Worcester Polytechnic Institute stands out as a close-knit private school grounded in scientific education. The student body is actively engaged in campus activities, such as the rivalry contests like the gigantic tug-of-war held throughout the year that pit the freshmen class against the sophomores.  than 30 percent of students are members of the school's 15 or so fraternities and sororities. Even more - close to 70 percent - are involved in campus sports at some level. The WPI Engineers compete in the NCAA Division III New England Men's and Women's Athletic Conference, supported by mascot Gompei, a goat. Though the original school mascot was the head of a once-live goat, the school now uses a man-made replica for a mascot. WPI students also come out in droves for the school's club sports and intramural program, and all students must take four physical education courses, ranging from lifeguarding to plyometrics. Freshmen do not have to live in campus residence facilities, which include standard dormitories and four houses with student-selected themes. A university seal is imprinted on the ground in the center of campus, but make sure not to step on it; school lore warns that any student who does won't graduate on time. Off campus, students can use Woo Cards to get discounts on food and activities around Worcester. Boston is 45 miles away, or about an hour's trip by train.",
        "Tuition and fees": "$46,994",
        "In-state": "",
        "Undergrad Enrollment": "4,299"
    },
    {
        "Name": "Clemson University",
        "Location": "Clemson",
        "State": "SC",
        "Rank": 66,
        "Description": "As a student at Clemson, get ready to love the color orange. The orange Clemson Tigers compete in the NCAA Division I Atlantic Coast Conference. The teams are supported by notoriously passionate student fans and two costumed student mascots, known as The Tiger and The Tiger Cub. There are more than 400 student clubs and organizations, and about 25 percent of students are involved in the school's large Greek system. Clemson is set on Hartwell Lake, where students can sail, swim and fish. For indoor fun, the on-campus Underground Recreation Center has a bowling alley, arcade and billiards room. Students can travel for free on campus bus system The CAT, which connects students between Clemson University and the nearby city of Clemson, S.C. The city of Clemson is within walking distance of campus, too, and offers a typical active college scene with many shopping, dining and nightlife options. Freshmen must live in university housing, and nearly half of all students choose to live on the school's picturesque, tree-lined campus.",
        "Tuition and fees": "$32,796",
        "In-state": "$14,240",
        "Undergrad Enrollment": "18,016"
    },
    {
        "Name": "Yeshiva University",
        "Location": "New York",
        "State": "NY",
        "Rank": 66,
        "Description": "Yeshiva University is Jewish institution in New York City. The university is divided into three undergraduate colleges: Yeshiva College, the Stern College for Women and the Sy Syms School of Business, each at campuses throughout Manhattan. A university shuttle system transports students between campuses. The university also has a campus in Israel, where more than 600 students a year study through the S. Daniel Abraham Israel Program. Freshmen are not required to live on campus, though many choose to do so. There are dozens of student organizations on campus, from a computer science club to the Student Holocaust Education Movement. The Yeshiva Maccabees sports teams compete at the NCAA Division III level. The school has a Center for the Jewish Future, which sponsors projects like the YU Torah Online. Students design regular Shabbat programs, and produce publications at each campus, including newspapers The Commentator and The Observer.",
        "Tuition and fees": "$40,670",
        "In-state": "",
        "Undergrad Enrollment": "2,744"
    },
    {
        "Name": "Brigham Young University--Provo",
        "Location": "Provo",
        "State": "UT",
        "Rank": 68,
        "Description": "Student life centers on religion and responsibility at Brigham Young University--Provo, a school founded and supported by The Church of Jesus Christ of Latter-day Saints (also known as the Mormon church). There are more than 70 clubs on campus, which meet Tuesday evenings. Each Wednesday, a student volunteer coalition completes community service projects around campus. There is no Greek system at BYU. The BYU Cougars mainly compete in the NCAA Division I West Coast Conference. The football team is known for the number of players drafted by the NFL: more than 70 in the past 30 years. All BYU students can participate in the intramural sports, and about 25,000 choose to do so. Freshmen do not have to live on the Provo, Utah, campus, though the school encourages it. All students live according to a strict honor code, which prohibits - among other things - camping with members of the opposite sex and growing a beard without a doctor's approval. Extramarital and gay sex are also prohibited. Situated at the base of the Wasatch Mountains, the campus is close to plentiful climbing, hiking and biking opportunities. Provo is also home to the Missionary Training Center, where students of the Latter-day Saints faith can enroll to learn and grow before serving at least 18 months around the world.",
        "Tuition and fees": "$5,300",
        "In-state": "",
        "Undergrad Enrollment": "30,221"
    },
    {
        "Name": "University of Pittsburgh",
        "Location": "Pittsburgh",
        "State": "PA",
        "Rank": 68,
        "Description": "Located in the Oakland neighborhood, Pitt's campus is a 3-mile trip from bustling downtown Pittsburgh. The city is home to powerhouse professional sports teams, such as the Steelers and Penguins, and dozens of unique cultural centers, like the Andy Warhol Museum and Phipps Conservatory & Botanical Gardens. Pitt students get free admission to these and other select museums throughout the school year. Because Pittsburgh is bordered by three rivers, kayaking, sailing and fishing opportunities are plentiful. City buses stop every 10 to 15 minutes on campus, and students can ride public transportation into the city for free with school ID. Freshmen do not have to live on campus. Pitt has a sizeable Greek community of about 35 fraternities and sororities. Students in Arts and Sciences majors can earn hands-on credits in internships, research and teaching with the help of the university's Office of Undergraduate Research, Scholarship and Creative Activity. The Pittsburgh Panthers sports teams compete in the NCAA Division I Atlantic Coast Conference. Pitt students are notorious for their avid support at sporting events, particularly for forming a riotous cheering section known as the Oakland Zoo at basketball games. Students who attend the most home sporting events get priority purchasing when game tickets are in high demand through the school's Loyalty Points system.",
        "Tuition and fees": "$29,758",
        "In-state": "$18,618",
        "Undergrad Enrollment": "18,908"
    },
    {
        "Name": "Rutgers University--New Brunswick",
        "Location": "Piscataway",
        "State": "NJ",
        "Rank": 70,
        "Description": "For high school students who can't decide what their ideal college campus would look like, Rutgers University may be the solution. The flagship campus of New Jersey's state university, based in New Brunswick, is actually split into five mini-campuses known as Douglass, Cook, College Avenue, Busch and Livingston. Each campus has a unique setting and identity, from the hip student feel of the College Avenue campus to the farmland and science buildings at Cook Campus. Each mini-campus has its own student center and dining options. Freshmen do not have to live on campus, but those who choose to do so have options on each campus, too. There are more than 400 student clubs and organizations across the mini-campuses, including more than 80 fraternities and sororities. The Rutgers Scarlet Knights compete in the NCAA Division I Big Ten Conference. The university also has a virtual campus on Second Life.",
        "Tuition and fees": "$30,023",
        "In-state": "$14,372",
        "Undergrad Enrollment": "35,484"
    },
    {
        "Name": "Baylor University",
        "Location": "Waco",
        "State": "TX",
        "Rank": 71,
        "Description": "The student community at Baylor University is bound together largely by religion and service. The Waco, Texas, school is a private, Baptist institution, and its student body is particularly active in volunteerism. Each semester, students donate a collective 12,000 hours of time to service projects through a one-day program called Steppin' Out. Students can volunteer year round through the school's Urban Missions, which coordinates service projects in the local community, and Global Missions, which sends students abroad. The student body is also active in faith-based activities. Each year, students lead Be The Change, a week of speakers, breakout sessions and events that give religion a global focus. Freshmen are required to live on campus and must also take two semesters of Chapel, attending worship services every Monday and Wednesday. Students and faculty gather daily for a campus prayer at noon, and weekly for free ice cream floats during \"Dr Pepper Hour.\" Students can also get involved in more than 270 student organizations on campus. There are more than 40 fraternities and sororities, and the organizations compete in their own intramural sports leagues. Baylor is one of the only private schools in the NCAA Division I Big 12 Conference, but the sports teams, known as the Baylor Bears, stay competitive - especially in football. The school mascot, not surprisingly, is a bear. Baylor University also has its own holiday, Diadeloso, a day when classes are canceled so students can participate in athletics tournaments and attend free concerts. Waco, which is 100 miles from Dallas and Austin, is a small city with outdoor recreation opportunities like hiking and mountain biking.",
        "Tuition and fees": "$42,006",
        "In-state": "",
        "Undergrad Enrollment": "14,189"
    },
    {
        "Name": "Stevens Institute of Technology",
        "Location": "Hoboken",
        "State": "NJ",
        "Rank": 71,
        "Description": "Innovation and entrepreneurship is stressed at Stevens Institute of Technology, a research-intensive school primarily known for its engineering, science and management programs. The school also has a humanities division with eight majors. Undergraduate students are encouraged to get involved in research projects and develop new technologies through the school's Technogenesis philosophy. Students can opt for a cooperative education track, which is a five-year program with mostly alternating semesters of class and full-time, paid work. Students complete a full first and fifth year at Stevens, and pay for only four years of school. On campus, in Hoboken, N.J., there are more than 120 clubs and organizations, including about 15 fraternities and sororities. Housing is guaranteed for four years, and more than 60 percent of students choose to live on campus. The campus lies along the Hudson River, and New York City is a boat or subway ride away. The Stevens Ducks mainly compete in the NCAA Division III Empire 8 Athletic Conference, and, through the school's Adopt-a-Team program, all student athletes have a faculty mentor to help them juggle sports and school work. Incoming freshmen also do not have the hassle of buying a new laptop; each student is given a notebook computer with software configured to his or her major. The school was exclusively for male students until 1971, and now, females make up close to 30 percent of the student body.",
        "Tuition and fees": "$48,838",
        "In-state": "",
        "Undergrad Enrollment": "2,873"
    },
    {
        "Name": "University of Minnesota--Twin Cities",
        "Location": "Minneapolis",
        "State": "MN",
        "Rank": 71,
        "Description": "The University of Minnesota stretches across a major city - or two, to be exact. Minneapolis and St. Paul, known as the Twin Cities, are frequently recognized for sports, cleanliness and volunteerism. The school has a campus in each city, though the Minneapolis site is considered the main campus of the University of Minnesota. Freshmen do not have to live on campus, but the more than 80 percent who choose to can opt to live in traditional residence halls or one of more than two dozen Living Learning communities, such as the Healthy Foods, Healthy Lives House and La Casa De Espa��ol. Also on campus are more than 600 student organizations, including more than 30 fraternities and sororities. The Minnesota Golden Gophers compete in the NCAA Division I Big Ten Conference, and all athletic events are held in the Minneapolis campus's Stadium Village neighborhood. Goldy Gopher, the school mascot, energizes thousands of student fans as they chant \"Ski-U-Mah,\" a rally cry that means \"Victory UM.\" Under the Four-Year Graduation Plan, the university ensures that all necessary classes will be available for students to complete their degrees on time. If courses are not available in an undergraduate's four years of schooling, the university will pay for the extra credits.",
        "Tuition and fees": "$22,210",
        "In-state": "$13,790",
        "Undergrad Enrollment": "34,071"
    },
    {
        "Name": "American University",
        "Location": "Washington",
        "State": "DC",
        "Rank": 74,
        "Description": "Students at American University benefit from the school's location in the political hub of the nation. Washington, D.C., is a playground for the politically and socially oriented with its countless museums, restaurants, clubs and year-round events. The university, located in a suburban pocket of northwest Washington, is close to a stop on the D.C.-area Metrorail transit system. Rides downtown take about 15 minutes. Students at American have been rated among the most politically active in the nation, and there are more than 200 student clubs and organizations on campus. The school also has a sizeable Greek system, with about 30 fraternities and sororities. The American University Eagles sports teams compete in the NCAA Division I Patriot League, and the school's mascot is, accordingly, an eagle. Catching a professional sports contest, such as a Redskins football game or a Nationals baseball game, is a quick trip from campus, too. The university is affiliated with the Methodist church, but its Kay Spiritual Life Center houses about 25 groups of different faiths. The confluence of opportunities on and off campus clearly works for most students: American University boasts a notably high freshmen retention rate of around 90 percent.",
        "Tuition and fees": "$44,853",
        "In-state": "",
        "Undergrad Enrollment": "7,909"
    },
    {
        "Name": "Clark University",
        "Location": "Worcester",
        "State": "MA",
        "Rank": 74,
        "Description": "Clark University in Worcester, Mass., is a small liberal arts institution in the midst of 11 other colleges and universities. Together, the schools make up the Higher Education Consortium of Central Massachusetts. All Clark students can get a WOO card: a pass that grants discounts at area attractions, baseball games and the local ski slope, Wachusett Mountain. Clark students can also ride the free intercampus shuttle to Becker College, Worcester Polytechnic Institute, Assumption College, Worcester State University and College of the Holy Cross. Students can also hop aboard to get to Worcester Public Library, Worcester Art Museum and the local train and bus station. On campus, Clark students can choose from more than 100 clubs and organizations, but the school does not have a Greek system. The Clark Cougars sports teams compete in the NCAA Division III New England Women's and Men's Athletic Conference. Freshmen and sophomores must live on campus, and all students are allowed to bring cars. For road trips, Boston is less than an hour's drive away; New York City is a three-hour trip. Students can explore more than 50 study abroad options after declaring a major, and about one-third of Clark students participate.",
        "Tuition and fees": "$43,150",
        "In-state": "",
        "Undergrad Enrollment": "2,397"
    },
    {
        "Name": "Texas A&M University--College Station",
        "Location": "College Station",
        "State": "TX",
        "Rank": 74,
        "Description": "Ready to be an Aggie? All students assume the nickname at Texas A&M, an academic and athletic powerhouse in central Texas. Once an all-men's school called the Agricultural and Mechanical College - now shortened to A&M - the university today is coed and has offers a wide variety of majors and activities. Students can choose from more than 800 clubs and organizations, including nearly 60 fraternities and sororities. About 10 percent of students go Greek.  students, about 25 percent, play in Texas A&M intramural sports leagues, one of the largest programs in the country. The school's varsity sports compete in the NCAA Division I Southeastern Conference, cheered on by mascot Reveille VIII, a collie. Miss Rev, as the collie is known, is also the highest-ranking member in the school's Cadet Corps, the largest ROTC program in the nation (not including programs at service academies). First-year students interested in community service can get involved right away through the Freshmen in Service and Hosting program (FISH). All students can give back during The Big Event, the largest single-day, student-run volunteer effort in the country in which more than 15,000 Aggies work to improve the nearby cities of College Station and Bryan. For many students, these communities are also home; freshmen are not required to live on campus and many choose to live in College Station or Bryan.",
        "Tuition and fees": "$28,768",
        "In-state": "$10,176",
        "Undergrad Enrollment": "48,960"
    },
    {
        "Name": "University of Massachusetts--Amherst",
        "Location": "Amherst",
        "State": "MA",
        "Rank": 74,
        "Description": "The University of Massachusetts--Amherst is the central location for the state school system. The university is large, but through the Five College Interchange, students can take courses at smaller liberal arts colleges nearby: Smith College, Mount Holyoke College, Amherst College and Hampshire College. Students have close to 90 majors to choose from, including an option to design a major, known as BDIC: the Bachelor's Degree with Individual Concentration. Adult students can complete a degree by taking classes online or on campus - or both - via the UMass Amherst University Without Walls (UWW). All freshmen must live on campus, and family housing, including one- and two-bedroom apartments, is also available to students who are married or who have legal custody of a dependent child. There are more than 200 student organizations to check out, as well as outdoor activities in and around the college's town, Amherst. For road trips from campus, Boston is 90 miles away, while New York City is a 175-mile drive. Notable alumni of the University of Massachusetts--Amherst include Jack Welch, former CEO of General Electric; Jeff Talyor, founder of Monster.com; and Jeff Corwin, an Animal Planet personality.",
        "Tuition and fees": "$30,123",
        "In-state": "$13,790",
        "Undergrad Enrollment": "22,748"
    },
    {
        "Name": "Virginia Tech",
        "Location": "Blacksburg",
        "State": "VA",
        "Rank": 74,
        "Description": "At Virginia Tech, a former military institute with its background in the sciences, students are encouraged to \"invent the future.\" Students are known as Hokies, a term that was the original rally cry when the school was known as the Virginia Agricultural and Mechanical College and Polytechnic Institute. Sports teams, also known as the Hokies, compete in the NCAA Division I Atlantic Coast Conference, and the school mascot is the HokieBird. Virginia Tech is settled in Blacksburg, a typical college town full of restaurants, bars and clubs. Students account for more than half the total residents in Blacksburg, and they dominate the town's public Blacksburg Transit bus system, which is free for Hokies. On campus, students can go bowling, play pool or try out video games in the BreakZONE. There are also more than 600 clubs and organizations, including a large Greek system of more than 50 fraternities and sororities. Freshmen must live on campus, which puts them in close proximity to the school's renowned dining facilities. Students can order steak and lobster at Virginia Tech's West End Market, or grab a meal from on-campus chain restaurants, including Au Bon Pain and Pizza Hut.",
        "Tuition and fees": "$29,371",
        "In-state": "$12,852",
        "Undergrad Enrollment": "25,384"
    },
    {
        "Name": "Miami University--Oxford",
        "Location": "Oxford",
        "State": "OH",
        "Rank": 79,
        "Description": "Miami University students make up nearly half the population of the approximately 7-square-mile town of Oxford, Ohio. Freshmen must live on campus, which is also home to more than 500 student organizations. The Greek system constitutes a large part of campus life, with about a third of the student body involved in more than 50 fraternities and sororities. In fact, the school often gets the moniker \"Mother of Fraternities\" because the Beta Theta Pi, Phi Delta Theta, Phi Kappa Tau and Sigma Chi organizations were founded at Miami University. The school is also known as the \"Cradle of Coaches\" for the number of professional and collegiate coaches who once competed for Miami. The RedHawks, who compete in the Division I Mid-American Conference, were known as the Redskins until 1997. The name was changed after years of controversy and a request from the Miami Indian Tribe. (The tribe is the namesake of the university.) To help ease the transition into freshman year, older students often create a guide to life at Miami University, called the \"M Book.\" Student couples who marry are known as \"Miami Mergers\" and are reminded of their alma mater each Valentine's Day, when the admissions office sends cards to congratulate former students on finding love at school.",
        "Tuition and fees": "$31,592",
        "In-state": "$14,288",
        "Undergrad Enrollment": "16,387"
    },
    {
        "Name": "University of California--Santa Cruz",
        "Location": "Santa Cruz",
        "State": "CA",
        "Rank": 79,
        "Description": "At the University of California--Santa Cruz, one of 10 schools in the state's university system, residence life can define a student's experience. Nearly 100 percent of freshmen live on campus and choose one of 10 residential colleges to join. These small groups have their own campus locations, as well as unique architecture and programming. Kresge College, for example, is home to an organic garden where students can take classes; students who are members of the College Nine community are often active in volunteer efforts and the college's Alternative Spring Break trips. Students who own RVs can also choose to reside in Camper Park, a unique community of students who live in their own home-like vehicles and share a common bathroom and lounge. Student campers may live with pre-approved roommates who are full-time UCSC students or spouses. Students living in residence halls may only have overnight guests 15 times a school year, for a maximum of three nights each visit. On campus, there are more than 25 miles of hiking and jogging trails, and more than 100 student clubs and organizations. Only about 3 percent of students are members of the school's small Greek system. The UC Santa Cruz sports teams are independent competitors in the NCAA's Division III. Athletes are cheered on by the Banana Slug, a nontraditional, yellow earthen creature that has been recognized among the best mascots in the country. For fun, students can tour Dead Central, a room full of Grateful Dead memorabilia donated by the band to UCSC, or explore the small beach town of Santa Cruz, located on Monterey Bay. There are rides and games on the Santa Cruz Beach Boardwalk, and opportunities for swimming, sailing and kayaking on the bay. To get around, students can travel on the Santa Cruz Metropolitan Transit District buses for free with school ID. For longer road trips, Monterey is 45 miles away, and San Francisco is a 75-mile trip.",
        "Tuition and fees": "$40,241",
        "In-state": "$13,559",
        "Undergrad Enrollment": "16,231"
    },
    {
        "Name": "University of Delaware",
        "Location": "Newark",
        "State": "DE",
        "Rank": 79,
        "Description": "For students interested in attending the University of Delaware, it pays to live in the state. The University of Delaware admits all Delaware residents whose academic records predict success, and about 65 percent who apply will be accepted. About half (45-55 percent) of all out-of-state applicants are admitted. For all who receive admission, there are about 280 student clubs and organizations on the school's lush campus in downtown Newark. Nearly 20 percent of students are involved in the school's large Greek system, which has about 25 fraternities and nearly 20 sororities. The Fightin' Blue Hens sports teams, named after a Delaware Revolutionary War battalion with the same nickname, compete in the NCAA Division I Colonial Athletic Association. The mascot is a costumed bird named YoUDee, and a group of live Blue Hen chickens reside on the school farm. Freshmen must live on campus, unless they commute from a parent's local home. When students want to leave campus, Wilmington is about 12 miles away. Philadelphia is a 45-mile drive and Baltimore is 55 miles away. The University of Delaware ran the nation's first study abroad program in 1923, and, these days, nearly 35 percent of undergraduates opt to spend time in another country.",
        "Tuition and fees": "$31,420",
        "In-state": "$12,520",
        "Undergrad Enrollment": "18,322"
    },
    {
        "Name": "Colorado School of Mines",
        "Location": "Golden",
        "State": "CO",
        "Rank": 82,
        "Description": "For students who want to work in the sciences, opportunities abound at the Colorado School of Mines. A public engineering and applied sciences school in Golden, Colorado, Mines has 14 academic departments, including Mechanical Engineering and Geophysics. The school also offers courses in the Liberal Arts & International Studies and Economics & Business departments. When students aren't studying, the school's location is ideal for outdoor recreation. Golden is 13 miles from the state capital of Denver and lies in the foothills of the Rocky Mountains, where students can bike, hike and climb. The campus also has a climbing wall for students to test their skills before attempting the Rockies. Cold-weather sports fans can partake in the annual Winter Carnival, a student-run affair packed with skiing and snowboarding at a local resort. The Mines sports teams, known as the Orediggers, compete in the NCAA Division II Rocky Mountain Athletic Conference, which is mostly made up of other teams from Colorado. The school mascot is Blaster the burro, and a giant \"M\" emblazoned onto nearby Mount Zion signifies the school spirit. There are more than 140 student clubs and organizations, including seven fraternities and three sororities. First-year students are required to live on campus. Even the student newspaper, The Oredigger, is decidedly science based; sections include weekly roundups of new discoveries and a Geek of the Week feature.",
        "Tuition and fees": "$34,828",
        "In-state": "$17,383",
        "Undergrad Enrollment": "4,608"
    },
    {
        "Name": "Michigan State University",
        "Location": "East Lansing",
        "State": "MI",
        "Rank": 82,
        "Description": "Michigan State University is a powerhouse institution located in the college town of East Lansing. Downtown, students can choose from dining and nightlife options, and the city is also home to the Great Lakes Folk Festival. Lake Michigan and its beaches are a short trip away, as is the state capital of Lansing. The Michigan State Spartans compete in the NCAA Division I Big Ten Conference, supported by award-winning mascot Sparty. There are more than 600 student clubs and organizations, including more than 55 fraternities and sororities. Members of the Greek community are active in the local community through events like Safe Halloween, an annual carnival for children in East Lansing. All students can get involved in service-learning and volunteer projects throughout East Lansing like Fill the Bus, an annual campaign to stuff a Spartan-green school bus full of food and school supplies for underprivileged children. The university is home to one of the largest single-campus residence hall systems in the country, and freshmen must live on campus unless they reside with a family member no more than 50 miles from school. To study farther afield, students can take advantage of more than 260 study abroad programs.",
        "Tuition and fees": "$39,090",
        "In-state": "$14,070",
        "Undergrad Enrollment": "39,143"
    },
    {
        "Name": "Texas Christian University",
        "Location": "Fort Worth",
        "State": "TX",
        "Rank": 82,
        "Description": "Texas Christian University is the biggest religious university associated with the Christian Church (Disciples of Christ) and is open to students of any faith. There are more than 20 religious organizations for students to join, among more than 200 others. Greek life is a popular option, with close to 40 percent of the student body involved in more than 30 fraternities and sororities. Freshmen and sophomores must live on campus, unless they are older than 21 or commute from a parent's home. The Horned Frog sports teams are members of the NCAA Division I Big XII Conference and are especially competitive in football. The unusual mascot is a small lizard and is also the official state reptile of Texas. Volunteer activities are a particularly big draw for students, and the school's Center for Community Involvement & Service-Learning coordinates excursions like service trips over spring break. The campus is about five miles from downtown Fort Worth, a historic area that still has an Old West feel. Students can check out live bull riding shows at Billy Bob's, a restaurant that is billed as the world's largest honky-tonk, or catch a rodeo at the Cowtown Coliseum. Dallas is about 35 miles away.",
        "Tuition and fees": "$42,670",
        "In-state": "",
        "Undergrad Enrollment": "8,894"
    },
    {
        "Name": "University of Iowa",
        "Location": "Iowa City",
        "State": "IA",
        "Rank": 82,
        "Description": "The University of Iowa offers top-notch academic programming in more than 100 areas. Students looking to hone their leadership skills have many options, too: They can enroll in the LeaderShape Institute, a six-day getaway workshop; attend the Leadership Development Series, which meets three times a semester; or participate in one of the many programs offered through the Center for Student Involvement & Leadership. Freshmen do not have to live on campus, but more than 90 percent choose to do so. Campus life may pose a challenge to tobacco users, as Iowa is a smoke-free campus. Students have more than 500 clubs and organizations from which to choose, and close to 10 percent of students go Greek as members of the school's nearly 50 fraternities and sororities. Sports are another big focus of campus life; even in the competitive NCAA Division I Big Ten Conference, the Iowa Hawkeyes are notorious players. Four blocks from campus is Iowa City, a Midwestern metropolis that has been recognized among the nation's best for its scenery, greenery and sustainable energy efforts.",
        "Tuition and fees": "$28,413",
        "In-state": "$8,325",
        "Undergrad Enrollment": "23,357"
    },
    {
        "Name": "Binghamton University--SUNY",
        "Location": "Binghamton",
        "State": "NY",
        "Rank": 86,
        "Description": "Outdoor recreation abounds in the southeastern New York location of Binghamton University. Despite its name, the university is actually located in Vestal, N.Y., a suburb of Binghamton. The campus includes a nature preserve, complete with a forest and pond where students can hike, bike and run around. Through the Adventure Resource Center and the Outdoor Pursuits program, students can participate in organized kayaking, climbing and camping trips or can plan an excursion of their own. Winter sports fans can go skiing and snowboarding at Greek Peak, a 30-mile trip from campus. On campus, annual student events include University Fest and Spring Fling, two outdoor celebrations with live music, carnival rides and food. There are more than 250 student organizations, including about 50 recognized fraternities and sororities. Freshmen must live on campus, and, because of space restrictions, no graduate students are permitted to do so. One perk of living in the school's residence facilities: free laundry. The Binghamton Bearcats compete in the NCAA Division I America East Conference, and student fans form the BU Zoo cheering section during basketball games. The school mascot is a bearcat named Baxter. On average, more than nine in 10 students remain at SUNY Binghamton after freshman year, one of the highest first-year retention rates in the country.",
        "Tuition and fees": "$22,164",
        "In-state": "$9,044",
        "Undergrad Enrollment": "13,491"
    },
    {
        "Name": "Indiana University--Bloomington",
        "Location": "Bloomington",
        "State": "IN",
        "Rank": 86,
        "Description": "No one quite knows what a \"Hoosier\" is, but a murky definition does not stop students at Indiana University-- Bloomington from fiercely identifying with the term. The school's sports teams are notorious competitors in the NCAA Division I Big Ten Conference, and, since Indiana University does not have a mascot, all teams are known simply as Hoosiers. There are more than 750 student organizations on campus, and more than 6,500 students go Greek in the school's large community of fraternities and sororities. Freshmen must live on campus for at least two semesters, though there are some exceptions. The Midwestern college town of Bloomington, or B-town, as it is known to many, is home to a lively cultural scene. Arts and entertainment performances, such as the annual Lotus World Music & Arts Festival, take place year-round. Students can explore the surrounding area through the Indiana University Outdoor Adventures program, which coordinates hiking, whitewater rafting and rock climbing trips. Active students can compete in the annual Little 500, the largest collegiate bike race in the nation and a fundraiser for university scholarships, or spend 36 hours on their feet in the IU Dance Marathon, a fundraiser for Riley Hospital for Children in Indianapolis.",
        "Tuition and fees": "$34,246",
        "In-state": "$10,388",
        "Undergrad Enrollment": "38,364"
    },
    {
        "Name": "Marquette University",
        "Location": "Milwaukee",
        "State": "WI",
        "Rank": 86,
        "Description": "Marquette University, a private Catholic, Jesuit school, is in walking distance of downtown Milwaukee, a city known for its restaurants, zoo and athletics. The Marquette Golden Eagles are members of the NCAA Division I Big East Conference and are especially competitive in basketball. The men's basketball team plays in the BMO Harris Bradley Center, which is also home to the NBA's Milwaukee Bucks. There is no varsity football team, but enthusiasts of the sport can play at the intramural level. Other sports options include coed club waterskiing and wakeboarding and intramural innertube water polo. Students have about 250 clubs and organizations to get involved in, and about 10 percent of the student body takes part in the Greek system, which includes more than 20 fraternities and sororities. To kick off each spring semester, the university holds the Winter Flurry, a week of games and activities that culminates in a semiformal dance known as Snowball. Freshmen and sophomores must live on campus, unless they reside locally with a family member or guardian. Lake Michigan is a mile from campus, and students can travel on Milwaukee County Transit System buses for free with a pass.",
        "Tuition and fees": "$38,470",
        "In-state": "",
        "Undergrad Enrollment": "8,334"
    },
    {
        "Name": "University of Denver",
        "Location": "Denver",
        "State": "CO",
        "Rank": 86,
        "Description": "Whether a student is looking for outdoor recreation, a bustling urban lifestyle or a hometown team to support in every major professional sports league, he or she will likely find it at the University of Denver. Known as DU, the school is settled at the base of the Rocky Mountains in the state's capital city. Students who want to explore Denver's surrounding areas can join in on group trips through the school's Alpine Club, which organizes more than 20 outdoor excursions a year. There are more than 100 other student clubs and organizations to check out, too, including about 15 fraternities and sororities. Freshmen and sophomores must live on campus, with some exceptions. Student athletes compete on the Denver Pioneers sports teams, members of the NCAA Division I Summit League. The school's ski team has won more national championships than any other program in the country. On the professional level, Denver has a team in each of the four major sports leagues: the Denver Broncos in the NFL, the Colorado Avalanche in the NHL, the Denver Nuggets in the NBA and the Colorado Rockies in the MLB. For creative entertainment, students can check out musical, theatrical and innovative performances in the on-campus Newman Center. The university campus also hosts the Pen and Podium series, which brings in several famous authors and poets to speak each year. To explore downtown Denver, students can hop on the city's LightRail system, a network of monorail trains that stops on campus and goes to more than 40 other locations. The city is known for its revitalized urban areas, including Lower Downtown, or LoDo, a hub of shopping, dining and nightlife that is 8 miles from campus.",
        "Tuition and fees": "$46,362",
        "In-state": "",
        "Undergrad Enrollment": "5,758"
    },
    {
        "Name": "University of San Diego",
        "Location": "San Diego",
        "State": "CA",
        "Rank": 86,
        "Description": "The University of San Diego is a Roman Catholic institution open to students of all faiths. The school overlooks Mission Bay, and downtown San Diego is about a 15-minute trip away. On campus, there are more than 100 student organizations, including more than 10 fraternities and sororities. Most of the San Diego Torero sports teams are members of the NCAA Division I West Coast Conference; the football team competes in the NCAA Division I-AA Pioneer League. Athletic teams are cheered on by the school's mascot, a costumed bullfighter named Diego Torero. The University Ministry coordinates retreats and immersion trips and hosts daily Mass services, including a special Mass for Peace on Wednesday nights. After class, students can relax at nearby beaches, like La Jolla and Pacific Beach, or explore Balboa Park, the biggest urban cultural park in the country, which is home to 15 museums, the San Diego Zoo and the Old Globe Theatre. Opportunities to kayak, sail, wind surf and more are nearby. Students can join group excursions, led by the school's Outdoor Adventures program, or rent kayaks, surfboards and snorkel equipment on campus for trips on their own. Freshmen must live on campus, and for students around on the weekends, the school hosts a Friday Night Movies series.",
        "Tuition and fees": "$46,140",
        "In-state": "",
        "Undergrad Enrollment": "5,647"
    },
    {
        "Name": "University of Tulsa",
        "Location": "Tulsa",
        "State": "OK",
        "Rank": 86,
        "Description": "Students at the University of Tulsa leave with two transcripts: an academic one and a co-curricular one. The CCT, as the latter is known, is a log of all membership in clubs, any leadership positions and any marketable skills a student has gained while in college. To beef up a CCT, students can get involved in more than 200 student clubs and organizations. The school's Greek system has more than 10 fraternities and sororities. Freshmen and sophomores must live on campus, unless they commute from a parent's home within 20 miles of campus. Students who are at least 21 years old or married may live off campus, too. The Golden Hurricane sports teams are members of the Division I American Athletic Conference, and the school's mascot is a superhero named Captain Cane. Students can join in Hurricane Thursdays, campus celebrations that alternate between carnivals, concerts and . The TU campus is two miles away from downtown Tulsa, Oklahoma, a city of about half a million people that is home to performing arts centers, museums, shops and nightclubs. The state capital of Oklahoma City is about 100 miles away.",
        "Tuition and fees": "$38,796",
        "In-state": "",
        "Undergrad Enrollment": "3,478"
    },
    {
        "Name": "Florida State University",
        "Location": "Tallahassee",
        "State": "FL",
        "Rank": 92,
        "Description": "Florida State University is a sprawling public school in Tallahassee, the state's capital. Freshmen are not required to live on campus, and typically, there is not room for every student, so it's important to apply early if you'd like to live in university housing. There are more than 600 student organizations to check out, as well as adventure trips for kayaking, backpacking, whitewater rafting and more coordinated through the school's Outdoor Pursuits program. The Florida State Seminoles sports teams compete in the NCAA Division I Atlantic Coast Conference and are traditionally dominant contenders in baseball and football. For students interested in studying abroad, Florida State has centers in Florence, Italy; London; Panama City, Panama; and Valencia, Spain, and offers students other study abroad programs as well. Florida State has a wide variety of graduate schools, including a College of Business, a College of Law and a College of Medicine. The university also has a joint College of Engineering with Florida A&M University. Among the notable graduates of Florida State University are fitness expert Richard Simmons and Spanx apparel line founder Sara Blakely.",
        "Tuition and fees": "$24,673",
        "In-state": "$9,507",
        "Undergrad Enrollment": "32,706"
    },
    {
        "Name": "North Carolina State University--Raleigh",
        "Location": "Raleigh",
        "State": "NC",
        "Rank": 92,
        "Description": "North Carolina State University, also known as NC State, is the largest four-year college in the state. As such, students have a surplus of choices, from more than 100 programs to major in to more than 400 clubs and organizations to join. The university has a large Greek community that fields more than 20 percent of the student body. For other extracurricular activities, students can check out annual events in Raleigh, such as the North Carolina State Fair and Winterfest. Freshmen are not required to live on campus, though about 80 percent choose to. On the sports fields, NC State is known as The Wolfpack and competes in the NCAA Division I Atlantic Coast Conference. NC State has a variety of academic departments that serve graduate students, too, including a highly ranked engineering school that's particularly well known for its nuclear and biological/agricultural engineering programs; an education program; and the Jenkins Graduate School of Management. Notable NC State graduates include former White House Press Secretary Robert Gibbs and Olympic swimmer and gold medalist Cullen Jones.",
        "Tuition and fees": "$26,399",
        "In-state": "$8,880",
        "Undergrad Enrollment": "24,111"
    },
    {
        "Name": "University of Colorado--Boulder",
        "Location": "Boulder",
        "State": "CO",
        "Rank": 92,
        "Description": "The University of Colorado Boulder, called CU�_--Boulder for short, lays against the majestic backdrop of the Rocky Mountains. Boulder is a lively college town with more than 80 miles of biking and walking trails. In the evenings, students can travel anywhere within the city limits for free in CU NightRide shuttles, which run until 1:15 a.m. on Fridays and Saturdays and 12:15 a.m. all other nights. On campus, there are more than 300 student clubs and organizations and close to 40 fraternities and sororities. Freshmen must live on campus. The Colorado Buffaloes compete in the NCAA Division I Pac-12 Conference. The student athletes, called Buffs for short, are supported by two buffalo mascots: a costumed student called Chip and a live animal named Ralphie V. The university stresses its commitment to volunteer efforts like Better Boulder Better World, a day of community service in the surrounding neighborhoods. For trips off campus, there are 11 ski slopes within 3 hours of campus, and Rocky Mountain National Park is 45 miles away. A bit closer is Denver, the state capital, where students can catch professional sports matches or concerts in the unique outdoor concert hall, Red Rocks Amphitheatre.",
        "Tuition and fees": "$35,079",
        "In-state": "$11,531",
        "Undergrad Enrollment": "27,010"
    },
    {
        "Name": "University of Vermont",
        "Location": "Burlington",
        "State": "VT",
        "Rank": 92,
        "Description": "Nestled between the Adirondack and Green Mountains is the University of Vermont, a quasi-public school founded in 1791. It is known colloquially as UVM, which is Latin for Universitas Viridis Montis, or University of the Green Mountains. Students who want to take advantage of the surrounding nature in Burlington, Vermont, can rent skis, snowshoes, canoes and camping equipment on campus. Students don't have to go far for an adventure, though; UVM has an adventure ropes course and an indoor rock climbing wall. There are more than 170 student organizations on campus, including about 15 fraternities and sororities. Fewer than 10 percent of students go Greek. Freshmen and sophomores must live on campus. The Catamounts athletic teams compete in the NCAA Division I America East Conference, cheered on by a mountain cat mascot named Rally. In Burlington, students can explore the outdoor Church Street Marketplace, a collection of restaurants and boutiques, or relax on the shores of Lake Champlain. For a more urban experience, Montreal and Boston are about 100 and 220 miles away, respectively.",
        "Tuition and fees": "$40,364",
        "In-state": "$17,300",
        "Undergrad Enrollment": "10,973"
    },
    {
        "Name": "Drexel University",
        "Location": "Philadelphia",
        "State": "PA",
        "Rank": 96,
        "Description": "Students at Drexel University can get a mix of in-class education and extensive on-the-job experience before graduation. Drexel operates a cooperative education program, sending students to more than 1,600 employers worldwide for six months at a time. Most co-ops are paid, and the average salary a Drexel student will take home is more than $16,000. Students who complete three co-ops generally graduate in five years. Students who participate in a single co-op experience or no co-op experience can graduate in four years. When students aren't working, there is plenty to do on the school's main campus in Philadelphia's University City. They have more than 300 student clubs and organizations to get involved in, including more than 30 fraternities and sororities. The Drexel Dragons compete in the NCAA Division I Colonial Athletic Association. The neighborhood is also home to the University of Pennsylvania and the University of the Sciences in Philadelphia. The city's central hub of public transportation, 30th Street Station, is two blocks from campus, and Center City Philadelphia is a 10-minute walk away. In total, more than 70 percent of Drexel students commute to school.",
        "Tuition and fees": "$51,030",
        "In-state": "",
        "Undergrad Enrollment": "14,138"
    },
    {
        "Name": "Saint Louis University",
        "Location": "St. Louis",
        "State": "MO",
        "Rank": 96,
        "Description": "St. Louis University is a Catholic, Jesuit school that is open to students of any faith. The Campus Ministry organizes specialized retreats and mission trips throughout the year, and the on-campus church holds a daily Mass. The Saint Louis Prayerbook is an online database of prayers - some traditional, others original and submitted by students or faculty members. In addition to religious extracurriculars, students can also choose from more than 150 student organizations at SLU, including more than 20 fraternities and sororities. Freshmen and sophomores must live on campus, unless they commute from a parent's home, are married or have been in the military for at least two years, among other exemptions. In total, about 90 percent of freshmen live on campus - all in halls exclusively for first-year students. Students can get involved in campus leadership positions as early as the second semester of freshman year. The St. Louis Billikens compete in the NCAA Division I Atlantic 10 Conference. The Billiken is an unusual mascot - a smiling, gnome-like figure that is a considered to be a good-luck charm. Off campus, students can explore downtown St. Louis, Missouri, home to the Grand Center arts district, the Anheuser-Busch Brewery and several professional sports teams. On the nearby Mississippi Riverfront, students can bike, sail and check out the Museum of Westward Expansion.",
        "Tuition and fees": "$40,726",
        "In-state": "",
        "Undergrad Enrollment": "8,248"
    },
    {
        "Name": "Stony Brook University--SUNY",
        "Location": "Stony Brook",
        "State": "NY",
        "Rank": 96,
        "Description": "Stony Brook University is one of 64 schools in the State University of New York (SUNY) system. Located on the North Shore of Long Island, the university is accessible by car, train and ferry, and many students choose to commute. Freshmen do not have to live on campus. Academic activity pauses each Wednesday from 1 p.m. to 2:30 p.m. for Campus Life Time, when students can check out free concerts, sample free food and take a break from the rigor of classes. Annually, students gather for events like the Roth Pond Regatta, a race of student-made cardboard boats, and the Shirley Strum Kenny Student Arts Festival, a week of student work showcases. Students can also check out more than 300 student organizations on campus, including more than 30 fraternities and sororities. On the athletic fields, the Stony Brook Seawolves compete in the NCAA Division I America East Conference. For a workout off the field, students can bike and hike around Stony Brook's large, wooded campus, which includes the Ashley Schiff Park Preserve. For an urban experience, New York City is about 60 miles away.",
        "Tuition and fees": "$26,266",
        "In-state": "$9,026",
        "Undergrad Enrollment": "16,831"
    },
    {
        "Name": "Auburn University",
        "Location": "Auburn",
        "State": "AL",
        "Rank": 99,
        "Description": "Auburn, Alabama, has been ranked one of the best places to live, and life at Auburn University can be similarly enjoyable for students. Football is a particularly big attraction in the fall, as fans support the Auburn Tigers with the help of school mascot Aubie the Tiger. The Tiger sports teams compete in the NCAA Division I Southeastern Conference, and the influx of football fans makes Auburn the fifth-largest city in the state on game days. Pep rallies are held in the downtown Toomer's Corner, and the area is covered in toilet paper by fans after every big victory. There are more than 300 organizations on campus, and about 6,000 students are involved in the school's Greek system. Auburn freshmen ease into the college transition through Camp War Eagle, a two-day, overnight summer orientation program. Transition help continues on Hey Day, an annual effort to get students to wear name tags and say hello to one another. Freshmen do not have to live on campus; in fact, a dorm room isn't even guaranteed. Because of space restraints, first-year students are awarded on-campus living assignments on a first-come, first-served basis.",
        "Tuition and fees": "$28,840",
        "In-state": "$10,696",
        "Undergrad Enrollment": "21,786"
    },
    {
        "Name": "Loyola University Chicago",
        "Location": "Chicago",
        "State": "IL",
        "Rank": 99,
        "Description": "Loyola University Chicago, or Loyola Chicago, as it's known for short, is one of the largest Jesuit institutions in the country. The school has two locations in Chicago - Lake Shore and Water Tower - where on-campus living is separated between freshmen, sophomores and all upperclassmen. The university also has an international campus four miles from downtown Rome, where about 400 students study abroad each year. The Loyola Ramblers compete in the NCAA Division I Missouri Valley Conference. For graduate students, Loyola Chicago has a business school, a law school - particularly well known for health care law - and a medical school. There is an accelerated 3-3 year program for Loyola Chicago undergraduates who want to go to law school at Loyola, too. Notable Loyola alumni include Ian Brennan, co-creator of the TV show \"Glee\"; Thomas Purcell, co-executive producer of Comedy Central's \"The Colbert Report\"; and Michael Quinlan, former CEO of McDonald's Corp.",
        "Tuition and fees": "$41,384",
        "In-state": "",
        "Undergrad Enrollment": "11,079"
    },
    {
        "Name": "SUNY College of Environmental Science and Forestry",
        "Location": "Syracuse",
        "State": "NY",
        "Rank": 99,
        "Description": "The SUNY College of Environmental Science and Forestry offers students a niche education with the benefits of life at a large institution. ESF, as the small school is known for short, offers about 20 Bachelor of Science degrees ranging from aquatics and fisheries science to paper engineering, as well as a landscape architecture program. Students can get a broader experience, however, through neighbor school Syracuse University. The two institutions, both located in Syracuse, New York, have a collegiate partnership. ESF students can enroll in courses, live in residence halls, use campus facilities and join student organizations at Syracuse University. ESF and Syracuse students even graduate in a joint commencement ceremony each May. All ESF freshmen must live on the school's campus, however. The school has its own array of about 25 clubs. The ESF Mighty Oaks sports teams compete in the United States Collegiate Athletic Association, made up of small schools, and students can take part in club and intramural sports at Syracuse. ESF has an additional campus in the Adirondack Mountains, called the Ranger School, where students can study forest technology. The Ranger School offers associate degree programs, as well as courses toward a bachelor's degree. Earth Day is a weeklong celebration at the environmental school, with events like yoga on the campus quad, student-wide barbecues and volunteer clean-ups of local streams.",
        "Tuition and fees": "$17,620",
        "In-state": "$7,770",
        "Undergrad Enrollment": "1,839"
    },
    {
        "Name": "University at Buffalo--SUNY",
        "Location": "Buffalo",
        "State": "NY",
        "Rank": 99,
        "Description": "Founded in 1846, University at Buffalo--SUNY is a public institution. The school has 35.9 percent of its classes with fewer than 20 students, and the student-faculty ratio at University at Buffalo--SUNY is 13:1.",
        "Tuition and fees": "$26,270",
        "In-state": "$9,770",
        "Undergrad Enrollment": "19,951"
    },
    {
        "Name": "Illinois Institute of Technology",
        "Location": "Chicago",
        "State": "IL",
        "Rank": 103,
        "Description": "The Illinois Institute of Technology, a private university in Chicago, provides a variety of options for students interested in the sciences. IIT offers a wide range of engineering degree programs, including aerospace engineering, biomedical engineering and mechanical engineering, as well as a range of degrees in architecture and the sciences. (For liberal arts-minded students, the school awards degrees for majors including communications, humanities and political science.) The school also runs an Institute of Design; the Chicago-Kent College of Law, which is particularly well known for its trial advocacy program; the Stuart School of Business; and other graduate student programs. For undergrads, there are more than 100 clubs and organizations to join, including TechNews, the student newspaper. Freshmen are required to live on campus, with some exceptions, and both undergraduate and graduate housing is available through the university. Each year, the campus comes together for events including Pumpkin Launch, a day in which students, faculty and alumni showcase homemade launching devices as they try to catapult pumpkins the furthest, and a spring formal in downtown Chicago. Students can also show their school spirit at IIT Scarlet Hawks athletic events, though the school does not have a football team. Notable alumni include Victor Tsao, founder of network hardware firm Linksys, and James Roche, former secretary of the Air Force.",
        "Tuition and fees": "$45,214",
        "In-state": "",
        "Undergrad Enrollment": "2,991"
    },
    {
        "Name": "University of Alabama",
        "Location": "Tuscaloosa",
        "State": "AL",
        "Rank": 103,
        "Description": "As the flagship campus of the University of Alabama system, the Tuscaloosa campus is often referred to as \"The Capstone.\" UA students have more than 250 student organizations to get involved in on campus - and freshmen have to live there, too. There are close to 60 fraternities and sororities in the school's influential Greek system, made up of more than 7,000 students. The Alabama Crimson Tide sports teams are notorious competitors in the NCAA Division I Southeastern Conference, cheered on by an costumed elephant mascot named Big Al. There is also a men's and women's wheelchair basketball program. Students can boat and fish in the nearby Black Warrior River. For a road trip, the city of Birmingham is about 60 miles away.",
        "Tuition and fees": "$26,950",
        "In-state": "$10,470",
        "Undergrad Enrollment": "31,958"
    },
    {
        "Name": "University of Oregon",
        "Location": "Eugene",
        "State": "OR",
        "Rank": 103,
        "Description": "The University of Oregon, or UO for short, is located in Eugene, a town that bills itself on its strengths in the arts and outdoor activities. Students interested in the arts have a similarly vast array of events to choose from at UO and the surrounding community, from the Oregon Bach Festival to the Cinema Pacific Film Festival. The UO Ducks sports teams compete in the NCAA Division I Pac-12 Conference and draw a considerable amount of fans, especially in track and field and football. The school has a small but thriving Greek life with around 30 fraternities and sororities on campus. On-campus housing is not guaranteed, with spots filled on a first-come, first-served basis. Only about 20 percent of students live on campus, and the majority of these are underclassmen. There is a dual enrollment option for students who want to take courses at both UO and a local community college. While at UO, students can give their r��sum��s a boost through the Professional Distinctions Program, which incorporates extra academic concentrations, internships and career workshops. For graduate students, the University of Oregon has a highly ranked College of Education, as well as a law school, business school and other graduate degree programs. UO is also home to more than 30 research centers and institutes, from the Center for the Study of Women in Society to the Northwest Indian Language Institute. Notable alumni of the University of Oregon include Bill Bowerman, cofounder of Nike, Inc., and Ken Kesey, author of \"One Flew Over the Cuckoo's Nest.",
        "Tuition and fees": "$33,442",
        "In-state": "$10,762",
        "Undergrad Enrollment": "20,538"
    },
    {
        "Name": "University of Tennessee",
        "Location": "Knoxville",
        "State": "TN",
        "Rank": 103,
        "Description": "The University of Tennessee is a public research institution in Knoxville, one of the state's largest cities, and is the flagship campus for the state school. It has more than 40 fraternities and sororities for students to join. The UT sports teams are known as the Vols and the Lady Vols, short for Volunteers. The teams compete in the NCAA Division I Southeastern Conference, and football season is a particularly big draw at the school. The university helps to manage the U.S. Department of Energy's Oak Ridge National Laboratory, where students and faculty tackle research projects. The University of Tennessee grants graduate degrees through its Graduate School of Business, law school, College of Engineering and College of Education, Health, and Human Sciences, as well as a Space Institute, among other academic departments. Graduates of the University of Tennessee include current and former NFL players Peyton Manning and Reggie White, respectively.",
        "Tuition and fees": "$30,858",
        "In-state": "$12,668",
        "Undergrad Enrollment": "21,863"
    },
    {
        "Name": "Rochester Institute of Technology",
        "Location": "Rochester",
        "State": "NY",
        "Rank": 107,
        "Description": "Despite its name, the Rochester Institute of Technology offers programs in the liberal arts, art and design, and business, in addition to science and technology. Co-ops - paid, full-time work experiences - are an important part of an RIT education. For some majors, co-ops are required; for others, they are encouraged. Students also have the option of completing one of about 20 accelerated degree programs, earning, for example, both a bachelor's degree and an MBA in five years. For a break from school work, students can hang out in the RITZ Sports Zone in the RIT Student Alumni Union or a game room run by the Residence Halls Association, among other options. There are about 300 student organizations, including fraternities and sororities. Freshmen are guaranteed university housing, and close to three-quarters of all students live on campus. Students showcase their school pride every Friday - also known as Spirit Day - by wearing the school's colors, orange and brown, in addition to showing support at RIT Tigers sports games. RIT has several graduate schools, including the E. Philip Saunders College of Business and the Kate Gleason College of Engineering. The university is also home to the National Technical Institute for the Deaf, and students with hearing disabilities are eligible for discounted university tuition.",
        "Tuition and fees": "$38,568",
        "In-state": "",
        "Undergrad Enrollment": "12,607"
    },
    {
        "Name": "University of New Hampshire",
        "Location": "Durham",
        "State": "NH",
        "Rank": 107,
        "Description": "The University of New Hampshire is a public institution located in the city of Durham, near the coastline of the state. Students at UNH can choose from more than 100 majors, including graduate studies in the Peter T. Paul College of Business and Economics, the College of Engineering and Physical Sciences, and in the fields of education and law. Even before freshmen undergraduates show up for their first classes, they get a chance to meet their classmates and have some fun through the Pre-Orientation Adventure for Wildcats (PAWs) program. This opportunity allows first year students to camp outdoors and learn from upperclassmen leaders. Once on campus, students can explore more than 200 clubs, join an intramural sports team or eat with friends at one of the dining halls, which often serve locally produced foods. The many UNH Wildcats varsity athletic teams compete in the NCAA Division I within various conferences. Notable UNH alumni include John Irving, who wrote the bestselling novel \"The World According to Garp\" and won an Academy Award for Best Adapted Screenplay of his book \"The Cider House Rules.",
        "Tuition and fees": "$31,424",
        "In-state": "$17,624",
        "Undergrad Enrollment": "13,034"
    },
    {
        "Name": "University of San Francisco",
        "Location": "San Francisco",
        "State": "CA",
        "Rank": 107,
        "Description": "The University of San Francisco is a Jesuit institution in California's Bay Area. The school tries to emphasize its Jesuit mission in every degree program offered. Students participate in service-learning courses, during which academic coursework is complemented by volunteer work around San Francisco. The university at large is committed to bettering the community, including through partnerships with local organizations and work through the school's research centers and institutes.  than 90 percent of freshmen live in on-campus housing. USF has about 100 clubs and organizations for students to consider joining, including a handful of fraternities and sororities. The USF Dons sports teams compete in the NCAA Division I West Coast Conference. The teams get their unique name, Don, or Spanish nobleman, from early Spanish settlers who came to California. Notable USF alumni include Starbucks co-founder Gordon Bowker and former NFL Commissioner Pete Rozelle.",
        "Tuition and fees": "$44,494",
        "In-state": "",
        "Undergrad Enrollment": "6,782"
    },
    {
        "Name": "University of South Carolina",
        "Location": "Columbia",
        "State": "SC",
        "Rank": 107,
        "Description": "The University of South Carolina eases its students into the transition to college life, no matter what year they begin to attend. For freshmen, there is University 101, a first-year program pioneered by the school to help students adjust. (They must also spend the first year living on campus.) For students transferring in from technical schools, the University of South Carolina offers the Bridge Program, an academic support system. The school sports teams, the Gamecocks, compete in the NCAA Divsion I Southeastern Conference. The University of South Carolina's college town, Columbia, boasts a variety of entertainment, night life and outdoor options for students to check out after class. Other college towns, including Charlotte, North Carolina, and Charleston, South Carolina, are both less than two hours away. The University of South Carolina also offers graduate programs, including the well-regarded Darla Moore School of Business, a law school, medical school, engineering school and College of Education. The Columbia campus is the flagship location of the University of South Carolina system, and the school runs a variety of research centers, including Center for GIS and Remote Sensing, the Center for Colon Cancer Research and the Center for Digital Humanities. The band Hootie and the Blowfish was started at the University of South Carolina when its members were students. Other notable alumni include U.S. Sen. Lindsey Graham and Gary Parsons, founder of XM Satellite Radio.",
        "Tuition and fees": "$31,282",
        "In-state": "$11,854",
        "Undergrad Enrollment": "25,237"
    },
    {
        "Name": "Iowa State University",
        "Location": "Ames",
        "State": "IA",
        "Rank": 111,
        "Description": "Iowa State University dwarfs Ames, the small town in which it resides. The large school offers more than 800 student organizations, and sports are a big part of campus life. The Iowa State Cyclones compete in the NCAA Division I Big 12 Conference and share a special rivalry with the University of Iowa Hawkeyes. Despite the Cyclones moniker, the school mascot is a cardinal named Cy because a cyclone was hard to put into costume form. There are nearly 50 fraternities and sororities at Iowa State, and most chapters have their own houses. Freshmen do not have to live on campus. There are more than 100 undergraduate majors offered at Iowa State, and, through the Soar in 4 initiative, advisers work with students to ensure they graduate in four years. For a study break, students can take a stroll through the roses in Reiman Gardens or check out more than 2,000 works of art around the campus - one of the largest collections at any school in the country. For trips off campus, Des Moines is 30 minutes away.",
        "Tuition and fees": "$21,483",
        "In-state": "$7,969",
        "Undergrad Enrollment": "30,034"
    },
    {
        "Name": "University of Dayton",
        "Location": "Dayton",
        "State": "OH",
        "Rank": 111,
        "Description": "The University of Dayton is a private, Catholic school in Ohio located about an hour north of Cincinnati and about an hour west of the state capital of Columbus. Students at the University of Dayton can choose from more than 80 undergraduate majors and many graduate programs, including those in the schools of business administration, law, engineering and education. The university, also called UD, encourages its students to actively practice their faiths through liturgies, spiritual retreats and special programs such as PORCH (People of Respect, Compassion and Hope). Through the PORCH program, students gather in small groups and meet once a week to pray. Students can also get involved in more than 200 organizations and with the campus radio and television stations. Student athletes can play at the recreational level or try out for the numerous Dayton Flyers varsity teams, which compete in the NCAA Division I Atlantic 10 Conference. Notable UD alumni include Chuck Noll, the only NFL coach to win four Super Bowl titles, which he did in the 1970s with the Pittsburgh Steelers.",
        "Tuition and fees": "$40,940",
        "In-state": "",
        "Undergrad Enrollment": "8,665"
    },
    {
        "Name": "University of Missouri",
        "Location": "Columbia",
        "State": "MO",
        "Rank": 111,
        "Description": "Students at the University of Missouri live in a unique botanical garden, with more than 40,000 plants across campus.  than a third of high school seniors from Missouri attend Mizzou each year, and all freshmen must live on campus. As the only Division I-A sports school in the state, the Missouri Tigers teams are a big focus of campus life. The teams compete in the NCAA Division I Southeastern Conference and are particularly competitive in football. The school mascot, Truman the Tiger, is named after former President Harry Truman, who was born in Missouri. Mizzou has more than 600 clubs and organizations for students.  than 20 percent of students join the school's Greek system, which is made up of 50-plus fraternities and sororities. Students also have a vast array of degree options, with more than 280 majors, nearly 70 of which can be completed online. The university's hometown of Columbia is in central Missouri and is host to annual events like the Roots 'n Blues 'n BBQ music festival and Art in the Park, a large creative works showcase. To travel around campus and the town on the weekends, students have free access to STRIPES, a transportation service that delivers riders to their homes from 10 p.m. to 3 a.m. Thursday through Sunday.",
        "Tuition and fees": "$25,892",
        "In-state": "$9,518",
        "Undergrad Enrollment": "27,812"
    },
    {
        "Name": "University of Nebraska--Lincoln",
        "Location": "Lincoln",
        "State": "NE",
        "Rank": 111,
        "Description": "There are about 150 majors to choose from at the University of Nebraska--Lincoln, a large, public institution that is committed to research. All freshmen must live on the school's campus in downtown Lincoln and can bring cars if they wish. There are more than 400 student organizations to check out, including a large Greek community with more than 40 fraternities and sororities. The UNL athletic squads, known as the Huskers, compete in the NCAA Division I Big Ten Conference. The University of Nebraska also offers a wide variety of graduate departments, including a College of Law, a College of Business Administration, a College of Engineering and a College of Education and Human Sciences. Notable alumni of the University of Nebraska--Lincoln include investor and philanthropist Warren Buffett and television talk show host Johnny Carson.",
        "Tuition and fees": "$23,148",
        "In-state": "$8,628",
        "Undergrad Enrollment": "20,182"
    },
    {
        "Name": "University of Oklahoma",
        "Location": "Norman",
        "State": "OK",
        "Rank": 111,
        "Description": "The University of Oklahoma, known as OU for short, is a large, public research institution in Norman. The OU Sooners are traditionally dominant athletic squads that compete in the NCAA Division I Big 12 Conference, cheered on by the Sooner Schooner mascot, a replica of an old Conestoga covered wagon. About 25 percent of students opt to join the school's large Greek system, made up of more than 40 fraternities and sororities. In addition, there are more than 300 other student clubs and organizations. All freshmen are required to live on the school's campus, which is also home to the National Weather Center. Undergraduates from any major program can apply to conduct research at the National Weather Center during the summer. There are many programs for graduate students, too, including those offered through the Michael F. Price College of Business, the College of Law, College of Medicine and College of Engineering. OU also has a well-regarded physician assistant training program. Many notable athletes, including former football player and coach Darrell Royal and baseball player Greg Dobbs, have graduated from the University of Oklahoma, as did former U.S. House Majority Leader Dick Armey and actress and comedian Olivia Munn.",
        "Tuition and fees": "$21,451",
        "In-state": "$8,065",
        "Undergrad Enrollment": "22,132"
    },
    {
        "Name": "University of the Pacific",
        "Location": "Stockton",
        "State": "CA",
        "Rank": 111,
        "Description": "The University of the Pacific is a private university with a picturesque campus in Stockton, California, that has made its way into more than 15 movies, including \"All the King's Men,\" \"Porgy & Bess\" and \"Flubber.\" Freshmen and sophomores must live on campus, unless they're commuting from a parent's home within 50 miles of school. Upperclassmen may live in residence halls, Greek houses or university apartments if they'd like, but they aren't required to. Greek life draws about 20 percent of the student body, and, in total, there are about 150 student organizations to consider joining. The Pacific Tigers sports teams compete in the NCAA Division I West Coast Conference. The school does not have a football team. Since Stockton is situated in the California Delta waterway, students are close to water sports options, including jet skiing, windsurfing and sailing. For road trips within California, Sacramento is 45 minutes away and San Francisco, Napa and San Jose are all within a 90-minute drive. In addition to its degree options for undergraduate students, the University of the Pacific has the McGeorge School of Law, the Eberhardt School of Business, a graduate school of education and . Notable alumni of the University of the Pacific include billionaire Alex Spanos, owner of the San Diego Chargers football team, and baseball agent Scott Boras, who founded the sports agency Boras Corp.",
        "Tuition and fees": "$44,588",
        "In-state": "",
        "Undergrad Enrollment": "3,735"
    },
    {
        "Name": "University of Utah",
        "Location": "Salt Lake City",
        "State": "UT",
        "Rank": 111,
        "Description": "The University of Utah, known as the U of U or simply The U, is a Salt Lake City center of academics, powerhouse sports and research. Undergraduates interested in university housing can choose from traditional residence halls, two- and four-bedroom apartments and common-interest living communities. The Utah sports teams, the Utes, compete in the NCAA Division I PAC-12 Conference and are rivals with Brigham Young University's teams. The U of U runs a variety of research centers and institutes, including the Brain Institute, the American West Center and the Center for High Performance Computing. The University of Utah's well-regarded S.J. Quinney College of Law, College of Engineering, College of Education and David Eccles School of Business all offer degree programs for graduate students. The U of U School of Medicine, which is particularly well regarded for its primary care program, is the only medical school in the state. Notable alumni of the University of Utah include Alan Ashton, co-founder of WordPerfect; Nolan Bushnell, founder of both Chuck E. Cheese's and video game company Atari Inc.; and John Warnock, co-founder of Adobe Systems Inc.",
        "Tuition and fees": "$27,039",
        "In-state": "$8,518",
        "Undergrad Enrollment": "23,794"
    },
    {
        "Name": "Michigan Technological University",
        "Location": "Houghton",
        "State": "MI",
        "Rank": 118,
        "Description": "Michigan Technological University is located in the small town of Houghton on the Keweenaw Peninsula of Lake Superior, about 100 miles north of the Wisconsin border. Students at Michigan Tech can choose from more than 120 undergraduate areas of study, as well as many master's degree programs, including those in the schools of business and engineering. Students at Michigan conduct research, often one-on-one with their professors, and have the opportunity to present what they learned at an undergraduate expo. Enterprise teams, which are groups of students of varying majors who work together to solve real-world problems, also present at the expo. In their free time, Michigan Tech students can participate in more than 200 organizations, Greek life or intramural sports. The university also has many traditions for students to follow, such as the annual Winter Carnival that takes advantage of the area's impressive snowfall with ice sculpture contests, snow volleyball, cross-country ski races and the \"Sno-Ball\"dance. Student athletes can try out for the NCAA Division I Michigan Tech Huskies men's hockey team or play for the many other varsity sports teams, which compete in Division II.",
        "Tuition and fees": "$30,968",
        "In-state": "$14,634",
        "Undergrad Enrollment": "5,721"
    },
    {
        "Name": "Seton Hall University",
        "Location": "South Orange",
        "State": "NJ",
        "Rank": 118,
        "Description": "Seton Hall University is a private, Catholic school in the small town of South Orange, New Jersey, about 15 miles from New York City. Also known simply as SHU, the university offers more than 60 majors in eight schools, with graduate programs in the Stillman School of Business, the school of education and the law school, which is home to a very highly ranked health care law program. Seton Hall students can make the most of their degrees by working with the career center, which connects them to internship and job opportunities. According to the school, the vast majority of SHU graduates find work in the New York or New Jersey area. But before they get that far, SHU students can explore more than 100 campus organizations, Greek life or recreational sports. More serious athletes can try out for one of the more than 15 Seton Hall Pirates varsity sports teams, which compete in the NCAA Division I Big East Conference. Notable alumni of SHU include Max Weinberg, the longtime drummer in Bruce Springsteen's E Street Band and the band leader on the television show \"Late Night with Conan O'Brien.",
        "Tuition and fees": "$39,258",
        "In-state": "",
        "Undergrad Enrollment": "6,090"
    },
    {
        "Name": "Temple University",
        "Location": "Philadelphia",
        "State": "PA",
        "Rank": 118,
        "Description": "Temple University is a large, urban college in Philadelphia. At Temple, freshmen are not required to live on campus, though most choose to do so. Students have the option to request their desired room assignment through an online system and can search for potential roommates using a matching program available through Facebook. Student fans can root for the Temple Owls sports teams, which compete in the NCAA Division I American Athletic Conference, as well as a variety of professional teams, including the Phillies, Flyers and Eagles. There are around 300 student organizations to check out, and Center City Philadelphia, a hub of shopping and city life, is about two miles from campus.  The school runs a variety of research centers and institutes, including the Innovation & Entrepreneurship Institute, the Center for Sustainable Communities and the Center for Asian Health. Temple University is also home to the Richard J. Fox School of Business and Management, the James E. Beasley School of Law, and schools of medicine, engineering and education, among others. Graduate students can also earn degrees in dentistry, pharmacy and podiatric medicine. Notable alumni of Temple University include actor Bill Cosby and celebrity photographer Jeff Kravitz.",
        "Tuition and fees": "$25,994",
        "In-state": "$15,688",
        "Undergrad Enrollment": "28,609"
    },
    {
        "Name": "University of California--Riverside",
        "Location": "Riverside",
        "State": "CA",
        "Rank": 118,
        "Description": "Despite its setting in Southern California, UCR has a distinctly Scottish feel. All residence halls at the University of California--Riverside are named for landmarks in Scotland, including Aberdeen-Inverness and Pentland Hills. Student athletes compete as UCR Highlanders in the NCAA Division I Big West Conference. The school's original mascot was a live Scottish terrier; today, sports teams are supported by a kilt-clad bear named Scotty. Members of the student Pep Band don plaid berets and sashes as they play the \"Brave Scots\" fight song at sports matches, and students who play the bagpipes or drums can join the school's Pipe Band as well. About 70 percent of UCR students are commuters, and freshmen do not have to live on campus. Students may want to hang around after class, however, for notable annual events like the fall Block Party and Spring Splash. There are more than 300 student organizations to check out, too, including about 40 fraternities and sororities. Freshmen can ease into college with the help of the First Year Success Series, a combination of seminars and workshops that teach students study and time management skills. Riverside is in an ideal location for road trips, with Disneyland and Orange County within a 40-mile drive and Los Angeles about 60 miles away.",
        "Tuition and fees": "$40,263",
        "In-state": "$13,581",
        "Undergrad Enrollment": "18,608"
    },
    {
        "Name": "University of Kansas",
        "Location": "Lawrence",
        "State": "KS",
        "Rank": 118,
        "Description": "Founded in 1865, University of Kansas is a public institution. University of Kansas follows a semester-based academic calendar and its admissions are considered more selective.",
        "Tuition and fees": "$25,932",
        "In-state": "$10,549",
        "Undergrad Enrollment": "19,245"
    },
    {
        "Name": "University of St. Thomas",
        "Location": "St. Paul",
        "State": "MN",
        "Rank": 118,
        "Description": "Founded in 1885, University of St. Thomas is a private institution. The school has 40.1 percent of its classes with fewer than 20 students, and the student-faculty ratio at University of St. Thomas is 14:1.",
        "Tuition and fees": "$39,594",
        "In-state": "",
        "Undergrad Enrollment": "6,240"
    },
    {
        "Name": "The Catholic University of America",
        "Location": "Washington",
        "State": "DC",
        "Rank": 124,
        "Description": "Catholic University of America, as its name suggests, is the national university of the Catholic Church. Students take several courses in theology and philosophy before graduation, and the Campus Ministry holds worship services and offers leadership opportunities to interested students. For other ways to get involved, Catholic University students can check out more than 80 clubs and organizations. The school's Cardinals athletic teams compete in the NCAA Division III Landmark Conference in every sport except football. The football team plays in the Old Dominion Athletic Conference. Freshmen and sophomores are required to live on campus, and because the university has a stop on Washington, D.C.'s public transportation system, the Metro, students are just a short trip away from Capitol Hill and other national landmarks. The school is home to about 20 research facilities, including the Institute for Policy Research & Catholic Studies. For graduate students, Catholic University runs the Columbus School of Law, a Department of Education and a School of Engineering, among other academic departments. There is also the Theological College, a seminary for male students preparing for priesthood. Among the many notable graduates of Catholic University are alumni such as actors Jon Voight and John Slattery; Robert Craves, co-founder of Costco Wholesale Inc.; and James Vanderslice, a former Dell Inc. executive.",
        "Tuition and fees": "$42,536",
        "In-state": "",
        "Undergrad Enrollment": "3,480"
    },
    {
        "Name": "DePaul University",
        "Location": "Chicago",
        "State": "IL",
        "Rank": 124,
        "Description": "DePaul University has five campuses in and around Chicago, and its two main locations, the Loop and Lincoln Park campuses, are located downtown. Individual academic colleges, such as the College of Liberal Arts and Social Sciences and the Driehaus College of Business, are located exclusively on one campus. DePaul is also home to the School for New Learning, which caters to adult students. Universitywide, there are more than 300 student organizations to check out, and students are allowed to form their own clubs, too. More than 5 percent of students join fraternities and sororities. The school's sports teams, the Blue Demons, compete in the NCAA Division I Big East Conference. The university operates on quarters, not semesters, and each year, students gather for events such as FEST, an outdoor concert and festival in the spring, and Homecoming. University housing is offered to all DePaul students. Freshmen and sophomores are permitted to live in residence halls or residence hall apartments. Juniors and seniors have a selection of university-owned lofts, townhouses and apartments. There is also a multi-college community residence hall for students of any age, known as University Center, where students from DePaul University live alongside peers from Roosevelt University, Robert Morris University and Columbia College. Notable alumni of DePaul University include actor John C. Reilly, star of films including \"Walk Hard: The Dewey Cox Story\" and \"Step Brothers,\" and Samuel Magad, former concertmaster of the Chicago Symphony Orchestra.",
        "Tuition and fees": "$37,626",
        "In-state": "",
        "Undergrad Enrollment": "15,961"
    },
    {
        "Name": "Duquesne University",
        "Location": "Pittsburgh",
        "State": "PA",
        "Rank": 124,
        "Description": "Founded in 1878, Duquesne University is a private institution. Duquesne University follows a semester-based academic calendar and its admissions are considered selective.",
        "Tuition and fees": "$35,062",
        "In-state": "",
        "Undergrad Enrollment": "5,961"
    },
    {
        "Name": "Howard University",
        "Location": "Washington",
        "State": "DC",
        "Rank": 124,
        "Description": "At Howard University, a historically black college in the heart of the District of Columbia, all undergraduate students complete a universitywide core curriculum. Required courses include those in English composition and Afro-American studies. Students then have dozens of majors to choose from, including Afro-American studies, French and music therapy. Outside of class, Howard students may choose to get involved in one of the school's many student organizations, including fraternities and sororities and academic clubs. The university has its own stop on the city's public transportation system, the Metro, and students are also permitted to bring cars to school. Freshmen, however, are not eligible for campus parking. The school offers a range of male, female and coed housing, both on and off campus. Howard University has many graduate programs as well, including those in the School of Business, School of Law, College of Medicine and College of Engineering, Architecture and Computer Sciences. Notable alumni of Howard University include former U.S. Supreme Court Justice Thurgood Marshall, Pulitzer Prize-winning author Toni Morrison and Emmy Award-winning actress Phylicia Rashad.",
        "Tuition and fees": "$24,908",
        "In-state": "",
        "Undergrad Enrollment": "6,883"
    },
    {
        "Name": "University of Arizona",
        "Location": "Tucson",
        "State": "AZ",
        "Rank": 124,
        "Description": "As one of the largest public institutions in its state, the University of Arizona in Tucson offers a wide range of activities and academic opportunities to its students. Student athletic supporters form the ZonaZoo, the student section that supports the Arizona Wildcats sports teams, which compete in the NCAA Division I Pac-12 Conference. For athletes who don't compete on the school's teams, there are three levels of intramural sports: the Desert league, which emphasizes fun; the Sunset league, geared to moderate athletes; and the Cactus league, meant for very skilled and competitive athletes. For other ways to get involved, University of Arizona students can check out more than 30 fraternities and sororities, among many other student organizations. Freshmen are not required to live on campus, though first-year students make up about 80 percent of the on-campus residential population. Each year, the university community gathers for events like the Spring Fling, billed as the largest student-run carnival in the country, and Homecoming. As a research institution, the University of Arizona also offers a variety of opportunities for both undergraduate and graduate students to get involved in research projects. The university has a wide range of graduate student programs, including the Eller College of Management, the James E. Rogers College of Law and a College of Medicine. Notable alumni of the University of Arizona include reality television star Kourtney Kardashian and journalist Geraldo Rivera.",
        "Tuition and fees": "$30,025",
        "In-state": "$10,872",
        "Undergrad Enrollment": "33,732"
    },
    {
        "Name": "Arizona State University--Tempe",
        "Location": "Tempe",
        "State": "AZ",
        "Rank": 129,
        "Description": "Arizona State University--Tempe, which has one of the largest undergraduate populations in the nation, offers students a wide range of academic and extracurricular options. Collectively, the campuses in Tempe and three other locations in the Phoenix area offer students more than 300 undergraduate academic programs to pick from and more than 500 clubs and organizations to check out. For time away from Arizona, students can choose from more than 250 study abroad options. Freshmen are required to live on campus, unless they commute from a parent's home, are married or fall under other exceptions. The Arizona State Sun Devils sports teams compete in the NCAA Division I Pac-12 Conference and are particularly known for their baseball prowess. Arizona State also offers a wide range of highly ranked graduate programs through schools including the W. P. Carey School of Business, the Sandra Day O'Connor College of Law, the Ira A. Fulton Schools of Engineering and the Mary Lou Fulton Teachers College. Among the scores of notable people who have attended ASU are actor David Spade, talk show host Jimmy Kimmel and baseball star Barry Bonds.",
        "Tuition and fees": "$25,458",
        "In-state": "$10,158",
        "Undergrad Enrollment": "41,828"
    },
    {
        "Name": "Clarkson University",
        "Location": "Potsdam",
        "State": "NY",
        "Rank": 129,
        "Description": "Clarkson University is a private school in northern New York, in the village of Potsdam, which is about a 90-minute drive from Ottawa and nearly two hours from Montreal. Undergraduates at Clarkson can choose from more than 50 academic programs, and graduates have many options as well, including those in the schools of business and engineering. Outside the classroom, Clarkson students can explore the more than 60 campus organizations, which include more than 10 fraternities and sororities. At Clarkson, there are also many annual events, such as the Holiday Hoops for Charity basketball games and pep rallies and bonfires on Spirit Day. Off campus, Clarkson students can discover the nearby Adirondack Mountains and Lake Placid, drive an hour to Canada or take a day trip to New York City. Student athletes at Clarkson can check out many intramural teams or play at the varsity level in the NCAA. The nationally recognized Golden Knights men's and women's hockey teams compete in Division I, and about a dozen other varsity teams play in Division III.",
        "Tuition and fees": "$46,132",
        "In-state": "",
        "Undergrad Enrollment": "3,257"
    },
    {
        "Name": "Colorado State University",
        "Location": "Fort Collins",
        "State": "CO",
        "Rank": 129,
        "Description": "Colorado State University is located in Fort Collins, a midsize city at the base of the Rocky Mountains, less than an hour north of Denver. Colorado State, also known as CSU, offers more than 150 degrees in eight colleges, with graduate programs in the schools of business, engineering and education and the renowned College of Veterinary Medicine and Biomedical Sciences. CSU is considered one of the leading research universities, and faculty and students work together to explore fields such as atmospheric science, infectious diseases, clean energy technologies and environmental science. Outside the classroom and research lab, students can get involved with the more than 350 campus organizations, including about 35 fraternities and sororities. Student athletes can find sports at the recreational, club and varsity level, with the CSU mascot and colors reflecting the school's past. CSU began as an agricultural school, so the sports teams were called the Aggies and their colors were green and gold to represent farming. The school held onto the colors, but the more than 15 varsity sports teams are now called the Rams. They compete in the NCAA Division I Mountain West Conference.",
        "Tuition and fees": "$28,374",
        "In-state": "$11,080",
        "Undergrad Enrollment": "24,433"
    },
    {
        "Name": "New School",
        "Location": "New York",
        "State": "NY",
        "Rank": 129,
        "Description": "Founded in 1919, New School is a private institution. New School follows a semester-based academic calendar and its admissions are considered selective.",
        "Tuition and fees": "$45,535",
        "In-state": "",
        "Undergrad Enrollment": "6,792"
    },
    {
        "Name": "Hofstra University",
        "Location": "Hempstead",
        "State": "NY",
        "Rank": 133,
        "Description": "With its location on Long Island, New York, Hofstra University puts students in an ideal location to enjoy attractions and secure internships in New York City. In addition to two traditional semesters, the university offers courses during a January term and several summer sessions. Campus residence options include traditional dormitories and Themed Living Communities, which group students by a common interest such as active living and performing arts. There are more than 200 student organizations, including about 20 fraternities and sororities. The Hofstra Pride sports teams compete in the NCAA Division I Colonial Athletic Association, and students can also get involved in club sports including roller hockey and Ultimate Frisbee. The university runs a variety of academic institutes, including the Peter S. Kalikow Center for the Study of the American Presidency, the National Center for Suburban Studies and the Long Island Studies Institute. There are many programs for graduate students, too, offered through university schools including the Frank G. Zarb School of Business, the Maurice Deane School of Law and the School of Education. Notable alumni of Hofstra University include actor Tom McGowan, who has appeared in TV shows including \"Frasier,\" \"Everybody Loves Raymond\" and \"Curb Your Enthusiasm,\" and Alan Colmes, former co-host of \"Hannity and Colmes\" on Fox News Channel.",
        "Tuition and fees": "$42,160",
        "In-state": "",
        "Undergrad Enrollment": "6,824"
    },
    {
        "Name": "University of Kentucky",
        "Location": "Lexington",
        "State": "KY",
        "Rank": 133,
        "Description": "The University of Kentucky is located in the city of Lexington, which is about 80 miles south of Cincinnati and 200 miles northeast of Nashville. The university offers many degrees, including about 120 master's programs, such as those in the Gatton College of Business and Economics, the College of Medicine and the College of Law. UK is also home to highly ranked graduate programs in the fields of health and public affairs. Students at UK can make the most of their studies by visiting the James W. Stuckert Career Center, which helps them find internships and jobs. Outside the classroom, University of Kentucky students can get involved by joining nearly 350 clubs, Greek life or the Kentucky Kernel student newspaper. Often called the \"Horse Capital of the World\" because of its race tracks and stables, Lexington can also be a source of fun for students, who can shop, golf, tour a museum, browse the farmers' market or spend a day at the horse track. Student athletes can get involved at the recreational level or try out for the many Kentucky Wildcats varsity teams, which compete in the NCAA Division I Southeastern Conference. Notable alumni include Senate Republican leader Mitch McConnell, who was voted to serve as president of the Student Bar Association while studying law at University of Kentucky.",
        "Tuition and fees": "$26,334",
        "In-state": "$11,484",
        "Undergrad Enrollment": "22,705"
    },
    {
        "Name": "Kansas State University",
        "Location": "Manhattan",
        "State": "KS",
        "Rank": 135,
        "Description": "Kansas State University is located in the city of Manhattan, in the northeast region of the state. Students at K-State, as it is known, can choose from more than 250 undergraduate majors and more than 60 master's degree programs, including those in the fields of business, engineering and education. K-State is home to the Biosecurity Research Institute, where students can train to research infectious diseases, and the Landon Lecture Series, which has hosted many prestigious speakers, including five former U.S. presidents. K-State students can join more than 450 organizations, dozens of fraternities and sororities, and student government. It's also easy to stay busy on campus by visiting the school's golf course, insect museum, dairy bar and gardens. Student athletes at K-state can play at the recreational level or try out for one of the many K-State Wildcats varsity sports teams, which compete in the NCAA Division I Big 12 Conference. Notable K-State alumni include actor Eric Stonestreet, who appears on the television show \"Modern Family,\" and chief White House photographer Pete Souza.",
        "Tuition and fees": "$23,429",
        "In-state": "$9,350",
        "Undergrad Enrollment": "19,859"
    },
    {
        "Name": "Louisiana State University--Baton Rouge",
        "Location": "Baton Rouge",
        "State": "LA",
        "Rank": 135,
        "Description": "Louisiana State University--Baton Rouge, better known as LSU, is a public school near the Mississippi River, in the southeastern part of the state. Students at LSU can choose from many programs in more than a dozen colleges, with graduate degrees available in the E. J. Ourso College of Business, the College of Engineering, the law school and several other fields. Outside the classroom, LSU students can explore more than 350 student organizations or check out the unique, free facilities nearby, including the 14-acre Hilltop Arboretum or the Louisiana Museum of Natural History. Sports fans can visit the Andonie Museum, which is also free and all about the history of LSU athletics. Student athletes can play at the recreational level or with the LSU Tigers varsity teams, which compete in the NCAA Division I Southeastern Conference. Notable LSU alumni include four-time NBA champion Shaquille O'Neal, and Lyndon Johnson's vice president, Hubert Humphrey.",
        "Tuition and fees": "$27,005",
        "In-state": "$9,842",
        "Undergrad Enrollment": "26,156"
    },
    {
        "Name": "Mercer University",
        "Location": "Macon",
        "State": "GA",
        "Rank": 135,
        "Description": "Just an hour south of Atlanta, the main campus of Mercer University is located in the slightly quieter city of Macon, Georgia. Mercer offers programs in 12 different colleges and schools, with business being the most popular major. Tradition is important to the Mercer community. For the last 100 years, first-year students have climbed the tower of the tallest campus structure, the Godsey Administration Building, to sign their names on the surface. The Mercer Student Government Association also hosts an annual ceremony to light the school Christmas tree. Students can get involved through more than 100 student organizations, Greek life and athletics. The Mercer Bears sports teams, called the Mercer Baptists until 1924, mainly compete in the NCAA Division I Southern Conference. Graduate students at Mercer can choose from several programs, including those in the School of Medicine or the Eugene W. Stetson School of Business and Economics. Famous Mercer alumni include Nancy Grace of HLN's \"Nancy Grace,\" who graduated from the Walter F. George School of Law.",
        "Tuition and fees": "$35,130",
        "In-state": "",
        "Undergrad Enrollment": "4,667"
    },
    {
        "Name": "New Jersey Institute of Technology",
        "Location": "Newark",
        "State": "NJ",
        "Rank": 135,
        "Description": "Founded in 1881, New Jersey Institute of Technology is a public institution. New Jersey Institute of Technology follows a semester-based academic calendar and its admissions are considered more selective.",
        "Tuition and fees": "$30,326",
        "In-state": "$16,108",
        "Undergrad Enrollment": "8,008"
    },
    {
        "Name": "Rutgers University--Newark",
        "Location": "Newark",
        "State": "NJ",
        "Rank": 135,
        "Description": "Rutgers University--Newark is one of several campuses of Rutgers University and is located in the largest city in the state. More than 60 percent of Rutgers University--Newark students complete a degree program in the Newark College of Arts and Sciences. Students aren't required to live on campus, though university housing options exist. The campus is near train, bus, subway and light rail stops, making commuting convenient. There are more than 100 clubs and organizations for interested students to check out, as well as Rutgers University--Newark Scarlet Raiders sports matches against fellow NCAA Division III New Jersey Athletic Conference member schools. Rutgers University--Newark also has a variety of degree programs for graduate students through departments such as the Business School, the School of Law and the highly ranked School of Criminal Justice. Notable alumni of Rutgers University--Newark include Louis Freeh, former director of the Federal Bureau of Investigation; Hazel O'Leary, former U.S. Secretary of Energy; and sports columnist Jerry Izenberg.",
        "Tuition and fees": "$29,480",
        "In-state": "$13,829",
        "Undergrad Enrollment": "7,713"
    },
    {
        "Name": "University of Arkansas",
        "Location": "Fayetteville",
        "State": "AR",
        "Rank": 135,
        "Description": "The University of Arkansas, or U of A, is a public institution located in the city of Fayetteville, in the northwest corner of the state. Students at the University of Arkansas can pursue a bachelor's degree in about 75 fields of study, with graduate degrees available in the Sam M. Walton College of Business, the College of Engineering, the School of Law and other fields. U of A students can get involved on campus through several student organizations and media opportunities, including two radio stations and a student newspaper that's been around for more than a century. The Office of Student Activities at U of A plans several free events for students, including concerts featuring Grammy winners such as John Mayer, and lectures by prominent figures such as former President George H.W. Bush. Students who want to venture off the University of Arkansas campus can visit the nearby Ozark National Forest and Buffalo National River or take a weekend trip to Dallas, Memphis or St. Louis, which are each about 300 miles away. Student athletes can join recreational sports or one of the nearly 20 University of Arkansas Razorbacks varsity teams, which compete in the NCAA Division I Southeastern Conference. Notable U of A past faculty include Bill and Hillary Clinton, who each taught in the law school a few decades before landing in the White House, and famed alumni include Charles Portis, who penned the Western novel \"True Grit.",
        "Tuition and fees": "$23,168",
        "In-state": "$8,820",
        "Undergrad Enrollment": "22,159"
    },
    {
        "Name": "University of Cincinnati",
        "Location": "Cincinnati",
        "State": "OH",
        "Rank": 135,
        "Description": "The University of Cincinnati is a public school that offers hundreds of programs of study, including graduate degrees in business, law and engineering. The university also has several highly ranked fine arts and health master's programs. Located just east of the uptown campus, the UC Academic Health Center is home to four colleges, patient-care facilities and major research laboratories. This center is famed for offering the first nursing bachelor's degrees in 1916 and developing the first live, attenuated polio vaccine in the 1960s. UC students today have much to do in and outside of the classroom. They can explore more than 300 campus organizations, join Greek life or educate themselves in the Racial Awareness Program (RAPP). Student athletes can get involved at the intramural or club sport level or try out for one of the many Cincinnati Bearcats varsity teams, which compete in the NCAA Division I American Athletic Conference. Notable alumni include Joseph Strauss, who designed the Golden Gate Bridge, and Abe Bookman, who invented the Magic 8-Ball toy.",
        "Tuition and fees": "$26,334",
        "In-state": "$11,000",
        "Undergrad Enrollment": "25,054"
    },
    {
        "Name": "University of Mississippi",
        "Location": "University",
        "State": "MS",
        "Rank": 135,
        "Description": "The University of Mississippi, better known as Ole Miss, is a large public institution in the college town of Oxford. Ole Miss has a large community of fraternities and sororities that about 35 percent of both male and female students join. Sports are another popular outlet for student athletes and fans alike, as the Ole Miss Rebels sports teams compete in the NCAA Division I Southeastern Conference. Freshmen must live on the university's campus in Oxford, a traditional college town with an art scene, restaurants and more to check out. The university is committed to research, with projects in the Center for the Study of Southern Culture, the National Center for Physical Acoustics, the Mississippi Law Research Institute and many . Ole Miss Law is one of many graduate schools the university offers; others include the School of Business Administration, the Ole Miss medical school, an engineering school and an education school. Notable alumni of Ole Miss include NFL players Archie Manning and son Eli Manning and novelist William Faulkner, author of \"The Sound and the Fury.",
        "Tuition and fees": "$22,012",
        "In-state": "$7,744",
        "Undergrad Enrollment": "18,785"
    },
    {
        "Name": "George Mason University",
        "Location": "Fairfax",
        "State": "VA",
        "Rank": 143,
        "Description": "George Mason University has three suburban campus locations near the District of Columbia. The school's Fairfax, Virginia, campus is the hub of undergraduate student life. Students can live in traditional coed residence halls, suites and apartments. The school has a sizable commuter population, but there are many ways for all students to get involved. There are more than two dozen fraternities and sororities, as well as hundreds of student clubs and organizations. The Patriot Activities Council plans major events, like Homecoming and Welcome Week. The school's Patriots sports teams are members of the NCAA Division I Atlantic 10 Conference. The university also has a number of graduate schools and programs, including the well-regarded George Mason School of Law.",
        "Tuition and fees": "$32,582",
        "In-state": "$11,300",
        "Undergrad Enrollment": "23,062"
    },
    {
        "Name": "Oregon State University",
        "Location": "Corvallis",
        "State": "OR",
        "Rank": 143,
        "Description": "Oregon State University is located in Corvallis, about 90 minutes south of Portland and an hour drive from the Pacific coast. Undergraduates at Oregon State can explore more than 200 academic programs, and graduate students can choose from more than 100 master's programs, including those in the schools of business, engineering and education. Oregon State, often called OSU, is the state's largest public research university, which specializes in studies of marine sciences, forestry, sustainable food systems and . Outside the classroom, OSU students can choose from hundreds of clubs to join, several fraternities and sororities to pledge and many events to attend, such as the Battle of the Bands. Student athletes can play at the intramural level or try out for the many Oregon State Beavers varsity sports teams, which compete in the NCAA Division I Pac-12 Conference. Each year, OSU students gather to compete in the historic \"Civil War\" football game against University of Oregon.",
        "Tuition and fees": "$28,846",
        "In-state": "$10,366",
        "Undergrad Enrollment": "24,612"
    },
    {
        "Name": "Washington State University",
        "Location": "Pullman",
        "State": "WA",
        "Rank": 143,
        "Description": "The main campus of Washington State University is located in Pullman, though there are also regional locations throughout the state in Spokane and the Tri-Cities, as well as in Vancouver. The school has a sizeable Greek community that recruits about 20 percent of the student population. In addition to fraternities and sororities, there are about 300 other student clubs and organizations to check out. The school's sports teams, including the Washington State University football squad, compete in the NCAA Division I Pac-12 Conference. Freshmen must live on campus, unless they're older than 20 or are married. Students with children or who are enrolled in graduate school may apply to live in university-owned apartments. The university is committed to research, and there are opportunities for students to get involved in projects as undergraduates. Washington State also offers a wide variety of graduate school options, including degree programs through the College of Business, the College of Engineering and the College of Education. Notable alumni of Washington State University include broadcast journalist Edward R. Murrow and \"Far Side\" cartoonist Gary Larson.",
        "Tuition and fees": "$25,673",
        "In-state": "$11,041",
        "Undergrad Enrollment": "24,470"
    },
    {
        "Name": "Adelphi University",
        "Location": "Garden City",
        "State": "NY",
        "Rank": 146,
        "Description": "Founded in 1896, Adelphi University is a private institution. Adelphi University offers a Greek system, where 10 percent of the student body is involved in a sorority and 8 percent is involved in a fraternity.",
        "Tuition and fees": "$34,034",
        "In-state": "",
        "Undergrad Enrollment": "4,852"
    },
    {
        "Name": "Ohio University",
        "Location": "Athens",
        "State": "OH",
        "Rank": 146,
        "Description": "Freshmen at Ohio University (OU) in Athens can ease into their college experience through learning communities, or LCs. These clusters of students take courses together and might live together, too. Students can also check out extracurricular activities, including nearly 500 clubs and organizations. With more than 30 fraternities and sororities, Greek life options abound, and about 10 percent of the student body opts to participate. The Ohio Bobcats compete in the NCAA Division I Mid-American Conference and have a traditionally successful men's basketball team. Ohio University students must live on campus until they have completed four semesters. Students who commute from a parent's home within 50 miles of campus are exempt from the housing requirement, as are students who meet other exemption criteria. OU offers a variety of degree programs for graduate students, too, through academic departments including the College of Education, the Russ College of Engineering and Technology and the College of Business. Notable alumni of Ohio University include actress Nancy Cartwright, who voices the character of Bart Simpson on the animated TV show \"The Simpsons\"; journalist Matt Lauer, co-anchor of \"The Today Show\"; and Roger Ailes, president of Fox News Channel and former campaign strategist for Presidents Richard Nixon, Ronald Reagan and George H.W. Bush.",
        "Tuition and fees": "$21,208",
        "In-state": "$11,744",
        "Undergrad Enrollment": "23,513"
    },
    {
        "Name": "San Diego State University",
        "Location": "San Diego",
        "State": "CA",
        "Rank": 146,
        "Description": "Founded in 1897, San Diego State University is a public institution. The school has 28.3 percent of its classes with fewer than 20 students, and the student-faculty ratio at San Diego State University is 28:1.",
        "Tuition and fees": "$18,244",
        "In-state": "$7,084",
        "Undergrad Enrollment": "29,234"
    },
    {
        "Name": "St. John Fisher College",
        "Location": "Rochester",
        "State": "NY",
        "Rank": 146,
        "Description": "Founded in 1948, St. John Fisher College is a private institution. St. John Fisher College offers a Greek system, where 0 percent of the student body is involved in a sorority and 0 percent is involved in a fraternity.",
        "Tuition and fees": "$31,880",
        "In-state": "",
        "Undergrad Enrollment": "2,805"
    },
    {
        "Name": "University at Albany--SUNY",
        "Location": "Albany",
        "State": "NY",
        "Rank": 146,
        "Description": "The University at Albany, which is part of the State University of New York (SUNY) system, is an institution that offers more than 50 undergraduate majors and about 120 master's programs, including those in the schools of education and business. Many of UAlbany's graduate programs are highly ranked, including criminal justice, social work and specialties offered in the Rockefeller College of Public Affairs and Policy. Ever since the school's early history, students and faculty have embraced Minerva, the Roman goddess of wisdom, as their symbol. Minerva appears on the school seal, and a 7-foot plaster statue of her has stood on campus for more than 100 years. UAlbany students get involved on campus by exploring more than 200 clubs, including several fraternities, sororities and recreational sports teams. Serious student athletes can choose from nearly 20 varsity teams, named the Great Danes, which compete in the NCAA Division I within various conferences. Notable Albany alumni include Harvey Milk, the first openly gay man elected to a major political office in America and the subject of the movie \"Milk,\" starring Sean Penn.",
        "Tuition and fees": "$22,244",
        "In-state": "$9,124",
        "Undergrad Enrollment": "12,908"
    },
    {
        "Name": "University of Texas--Dallas",
        "Location": "Richardson",
        "State": "TX",
        "Rank": 146,
        "Description": "Founded in 1969, University of Texas--Dallas is a public institution. University of Texas--Dallas follows a semester-based academic calendar and its admissions are considered more selective.",
        "Tuition and fees": "$33,654",
        "In-state": "$12,162",
        "Undergrad Enrollment": "15,575"
    },
    {
        "Name": "Illinois State University",
        "Location": "Normal",
        "State": "IL",
        "Rank": 152,
        "Description": "Illinois State University is located in the town of Normal, about 130 miles southwest of Chicago. Undergraduates at Illinois State can choose from dozens of degrees, and master's students can major in many fields as well, including business, education, and social sciences and humanities. First-year students at ISU can sign up for the Learning in Communities seminar, which allows them to take one of their first colleges courses with a small group of peers and learn about their fellow students and the university. ISU students can also join more than 300 student organizations, write for the Vidette student newspaper or play an intramural sport. More competitive athletes can try out for one of the many Illinois State Redbirds varsity sports teams, which compete in the NCAA Division I Missouri Valley Conference. ISU students can also spend their free time checking out the parks, golf course and museum in Normal, or attending one of ISU's many School of Theatre productions. A few of Illinois State's notable alumni performed in these productions and went on to become famous television actors, including Jane Lynch, who stars in \"Glee,\" and Laurie Metcalf, who appeared in \"Roseanne.",
        "Tuition and fees": "$20,886",
        "In-state": "$13,296",
        "Undergrad Enrollment": "18,426"
    },
    {
        "Name": "Immaculata University",
        "Location": "Immaculata",
        "State": "PA",
        "Rank": 152,
        "Description": "Founded in 1920, Immaculata University is a private institution. Immaculata University offers a Greek system, where 2 percent of the student body is involved in a sorority and 13 percent is involved in a fraternity.",
        "Tuition and fees": "$35,210",
        "In-state": "",
        "Undergrad Enrollment": "1,790"
    },
    {
        "Name": "Oklahoma State University",
        "Location": "Stillwater",
        "State": "OK",
        "Rank": 152,
        "Description": "At Oklahoma State University, freshmen are required to live on the school's campus in Stillwater, a town that's home to five lakes, theaters, restaurants and . There are more than 400 student organizations to consider, and OSU's Greek life is a popular extracurricular choice, with about 3,000 students joining the fraternities and sororities. Sports are another popular outlet; the OSU Cowboys and Cowgirls athletic teams compete in the NCAA Division I Big 12 Conference. For graduate students, there are degree programs offered through the Spears School of Business, the Center for Health Sciences, the College of Education - which is particularly well known for its technical and vocational training - and the engineering school, among other academic departments. Notable alumni of Oklahoma State University include country star Garth Brooks, professional golfer Rickie Fowler and Houston Nutt, former football coach at Ole Miss.",
        "Tuition and fees": "$20,978",
        "In-state": "$7,778",
        "Undergrad Enrollment": "21,046"
    },
    {
        "Name": "University of California--Merced",
        "Location": "Merced",
        "State": "CA",
        "Rank": 152,
        "Description": "Founded in 2005, University of California--Merced is a public institution. The school has 30.1 percent of its classes with fewer than 20 students, and the student-faculty ratio at University of California--Merced is 19:1.",
        "Tuition and fees": "$39,944",
        "In-state": "$13,262",
        "Undergrad Enrollment": "6,237"
    },
    {
        "Name": "University of Illinois--Chicago",
        "Location": "Chicago",
        "State": "IL",
        "Rank": 152,
        "Description": "The University of Illinois--Chicago (UIC) is located near public transportation stops, making the university both accessible for commuters and convenient for students who live on campus. There are more than 200 student clubs and organizations to check out, including fraternities and sororities. Through the UIC Undergraduate Research Experience, interested college students can pair up with faculty mentors and create a research project in a variety of academic areas. Each spring, students then present their findings at the university's Student Research Forum. Outside of academic work, student athletes compete on the UIC Flames sports teams, which are typically strong competitors in the NCAA Division I Horizon League and are supported by mascot Sparky D. Dragon. For graduate students, the university has a well-regarded College of Education, an engineering school and the Liautaud Graduate School of Business, among other academic departments. The UIC College of Medicine is the largest medical school in the country. Notable alumni of UIC include former CNN anchor Bernard Shaw, blues musician Billy Branch and prominent lobbyist Tony Podesta.",
        "Tuition and fees": "$26,526",
        "In-state": "$13,670",
        "Undergrad Enrollment": "17,575"
    },
    {
        "Name": "University of La Verne",
        "Location": "La Verne",
        "State": "CA",
        "Rank": 152,
        "Description": "Founded in 1891, University of La Verne is a private institution. University of La Verne follows a 4-1-4-based academic calendar and its admissions are considered selective.",
        "Tuition and fees": "$39,900",
        "In-state": "",
        "Undergrad Enrollment": "2,864"
    },
    {
        "Name": "University of Massachusetts--Lowell",
        "Location": "Lowell",
        "State": "MA",
        "Rank": 152,
        "Description": "Founded in 1894, University of Massachusetts--Lowell is a public institution. The school has 59.4 percent of its classes with fewer than 20 students, and the student-faculty ratio at University of Massachusetts--Lowell is 17:1.",
        "Tuition and fees": "$29,125",
        "In-state": "$13,427",
        "Undergrad Enrollment": "13,266"
    },
    {
        "Name": "Seattle Pacific University",
        "Location": "Seattle",
        "State": "WA",
        "Rank": 159,
        "Description": "Seattle Pacific University (SPU) is a private Christian institution located in the Queen Anne residential neighborhood of the city, about 10 minutes from downtown. Undergraduates at Seattle Pacific can choose from more than 60 academic programs, and graduate students can earn master's degrees in about 15 programs, including those in the schools of business and education. Many Seattle Pacific students and alumni utilize the Center for Career and Calling, which helps them perfect cover letters and portfolios, among other services, to ease the job search. Students at SPU can also get involved in about 50 clubs and an extensive network of volunteer opportunities through the John Perkins Center. Student athletes can play at the intramural level or try out for the maroon and white Seattle Pacific University Falcons varsity teams, which compete in the NCAA Division II Great Northwest Athletic Conference. Notable alumni include Doris Heritage, a distance runner who won five world championships in the sport before going on to coach the Seattle Pacific women's cross country team for about 40 years.",
        "Tuition and fees": "$38,940",
        "In-state": "",
        "Undergrad Enrollment": "3,202"
    },
    {
        "Name": "University of Alabama--Birmingham",
        "Location": "Birmingham",
        "State": "AL",
        "Rank": 159,
        "Description": "Founded in 1969, University of Alabama--Birmingham is a public institution. University of Alabama--Birmingham follows a semester-based academic calendar and its admissions are considered more selective.",
        "Tuition and fees": "$17,654",
        "In-state": "$7,766",
        "Undergrad Enrollment": "11,511"
    },
    {
        "Name": "University of Maryland--Baltimore County",
        "Location": "Baltimore",
        "State": "MD",
        "Rank": 159,
        "Description": "University of Maryland--Baltimore County is located about 45 minutes from Washington. The university offers more than 40 undergraduate majors and more than 30 graduate programs, including those in the engineering, science and public policy fields. UMBC bills itself as an honors university, and as such, hosts a chapter of the prestigious Phi Beta Kappa honor society and awards research grants to promising undergraduates, who then present what they've studied. Students can have fun outside the academic world by participating in about 250 student organizations, pledging one of the nearly 20 fraternities and sororities or attending any of the annual campus events, such as the spring carnival and concert called \"Quad Mania.\" Student athletes can play at the intramural level or try out for the nearly 20 UMBC Retrievers varsity teams, which compete in the NCAA Division I America East Conference. Notable UMBC alumni include actress Kathleen Turner, who starred in the movies \"Romancing the Stone,\" \"Peggy Sue Got Married\" and \"The War of the Roses.",
        "Tuition and fees": "$24,492",
        "In-state": "$11,264",
        "Undergrad Enrollment": "11,243"
    },
    {
        "Name": "University of Rhode Island",
        "Location": "Kingston",
        "State": "RI",
        "Rank": 159,
        "Description": "The main campus of the University of Rhode Island is located in the village of Kingston, with three smaller campuses in various parts of the state. The university began as an agricultural school, and a renovated farmhouse has stood on the Kingston campus for more than a century. Now, URI offers more than 80 undergraduate majors and many master's programs as well, including those in the School of Education, the College of Business Administration and College of Engineering. Outside the classroom, students can get involved in more than 100 campus organizations or pledge one of the roughly 20 fraternities and sororities. URI students can also leave campus and make a short trip to the beach or to the state capital of Providence. Student athletes can play at the recreational, club or varsity level. Most of the nearly 20 URI Rams sports teams compete in the NCAA Division I Atlantic 10 Conference, cheered on by their mascot Rhody. Notable URI alumni include oceanographer Robert Ballard, who discovered the sunken Titanic, and journalist Christiane Amanpour.",
        "Tuition and fees": "$28,852",
        "In-state": "$12,862",
        "Undergrad Enrollment": "13,641"
    },
    {
        "Name": "University of South Florida",
        "Location": "Tampa",
        "State": "FL",
        "Rank": 159,
        "Description": "The University of South Florida, or USF, as it's commonly known, is a research institution with multiple campuses throughout the state. The public university is based in Tampa and has regional campuses in Sarasota and St. Petersburg. First-year students are required to live on campus, unless they commute from one of several nearby counties, are older than 21 or are married, among other exemptions. For students who do not live on campus, the school organizes a Commuter Student Network and offers bus transportation for students who drive to school and park in remote lots. On campus, there are more than 400 student organizations to check out, as well as a large Greek community. Any activity that students get involved in may be added to their co-curricular transcripts - official documents the school offers to help students showcase their extracurricular involvement and specialized skills to future employers. The USF Bulls athletic teams compete in the NCAA Division I American Athletic Conference.  For graduate students, the school offers degree programs through the USF College of Medicine, a graduate school of engineering, a College of Education and other departments. Notable alumni of the University of South Florida include journalist Richard Oppel, former editor of the Austin American-Statesman and Charlotte Observer, and Kimberly Ross, executive vice president and chief financial officer of global cosmetics company Avon.",
        "Tuition and fees": "$17,325",
        "In-state": "$6,410",
        "Undergrad Enrollment": "31,111"
    },
    {
        "Name": "Biola University",
        "Location": "La Mirada",
        "State": "CA",
        "Rank": 164,
        "Description": "Founded in 1908, Biola University is a private institution. The school has 46.9 percent of its classes with fewer than 20 students, and the student-faculty ratio at Biola University is 15:1.",
        "Tuition and fees": "$36,696",
        "In-state": "",
        "Undergrad Enrollment": "4,225"
    },
    {
        "Name": "Maryville University of St. Louis",
        "Location": "St Louis",
        "State": "MO",
        "Rank": 164,
        "Description": "Founded in 1872, Maryville University of St. Louis is a private institution. Maryville University of St. Louis offers a Greek system, where 0 percent of the student body is involved in a sorority and 0 percent is involved in a fraternity.",
        "Tuition and fees": "$27,958",
        "In-state": "",
        "Undergrad Enrollment": "2,795"
    },
    {
        "Name": "Missouri University of Science & Technology",
        "Location": "Rolla",
        "State": "MO",
        "Rank": 164,
        "Description": "As its name suggests, Missouri University of Science & Technology focuses on many science, technology, engineering and math (STEM) degrees, including specialty engineering, computing and technology, and management systems. The school has a particularly wide variety of engineering majors for undergraduates to choose from, including aerospace engineering, mining engineering, petroleum engineering and engineering management. The university also offers many engineering graduate degree programs. However, undergraduate students can also opt to study humanities or several liberal arts disciplines, such as philosophy and history. Freshmen and sophomores must live on campus, unless they commute from their family's home, among other exceptions. Students can apply to live in traditional residence halls, suites, apartments or even the university's Solar Village, a community of solar homes that students build and later live in. About 20 percent of Missouri S&T students join fraternities and sororities. The student community comes together for annual events, including the Snowball Semiformal, Fall Fest and a weeklong celebration of St. Patrick's Day. The Missouri S&T Miners compete in the NCAA Division II Great Lakes Valley Conference. Notable alumni of the Missouri University of Science & Technology include Joe Ballard, former commander of the U.S. Army Corps of Engineers, and several NASA astronauts.",
        "Tuition and fees": "$26,152",
        "In-state": "$9,628",
        "Undergrad Enrollment": "6,841"
    },
    {
        "Name": "St. John's University",
        "Location": "Queens",
        "State": "NY",
        "Rank": 164,
        "Description": "St. John's University is a Roman Catholic institution open to students of all faiths. The school has campuses in the New York City boroughs of Queens, Staten Island and Manhattan. St. John's offers more than 150 academic, professional and recreational student organizations, including the St. John's Bread and Life program, which provides support and services for the poor. Greek organizations have been a part of campus life since 1956. Because of St. John's location in New York City, all freshmen are required to complete a course called Discover New York. This introduction to the city allows students to examine New York through a variety of academic disciplines. The Red Storm sports teams compete in the Big East Conference in the NCAA Division I. The university's athletic program fields more than 15 intercollegiate teams but is most well known for its men's basketball team.",
        "Tuition and fees": "$39,460",
        "In-state": "",
        "Undergrad Enrollment": "16,210"
    },
    {
        "Name": "Virginia Commonwealth University",
        "Location": "Richmond",
        "State": "VA",
        "Rank": 164,
        "Description": "Virginia Commonwealth University is located in Richmond. Cheering on the school's Division I sports teams, the VCU Rams, is a popular outlet for students. There are hundreds of clubs and organizations students can join, as well as about 40 fraternities and sororities. About 7 percent of VCU students are involved in Greek life. For off-campus recreation, students can take advantage of the school's Outdoor Adventure Program, which coordinates kayaking, backpacking and whitewater rafting trips, among other activities. VCU has a variety of academic departments for graduate students, too, including its well-regarded School of the Arts, School of Education, School of Medicine and School of Social Work. The university also has a campus in Qatar that focuses on arts programs.",
        "Tuition and fees": "$31,608",
        "In-state": "$13,076",
        "Undergrad Enrollment": "24,051"
    },
    {
        "Name": "Union University",
        "Location": "Jackson",
        "State": "TN",
        "Rank": 169,
        "Description": "Founded in 1823, Union University is a private institution. Union University follows a 4-1-4-based academic calendar and its admissions are considered more selective.",
        "Tuition and fees": "$30,420",
        "In-state": "",
        "Undergrad Enrollment": "2,829"
    },
    {
        "Name": "University of Hawaii--Manoa",
        "Location": "Honolulu",
        "State": "HI",
        "Rank": 169,
        "Description": "The University of Hawaii--Manoa is located just outside downtown Honolulu on the island of Oahu. The school's academic departments include the School of Hawaiian Knowledge, the School of Ocean and Earth Science and Technology, and the School of Pacific and Asian Studies. Outside of class, there are more than 200 student organizations to check out. UH Manoa's recreation center coordinates kayaking trips, sailing and surfing classes, snorkeling and hiking excursions and . Most of the University of Hawaii--Manoa's athletic teams compete in the NCAA Division I Big West Conference. The school also offers a wide variety of graduate programs, including degrees through its highly ranked College of Education, the William S. Richardson School of Law, the Shidler College of Business and the John A. Burns School of Medicine. Notable alumni of the University of Hawaii--Manoa include oceanographer Robert Ballard, former Citigroup chairman Richard Parsons and President Barack Obama's parents, Barack Obama Sr. and Ann Dunham Soetoro.",
        "Tuition and fees": "$33,764",
        "In-state": "$11,732",
        "Undergrad Enrollment": "13,689"
    },
    {
        "Name": "Edgewood College",
        "Location": "Madison",
        "State": "WI",
        "Rank": 171,
        "Description": "Edgewood College is a private institution that was founded in 1927. It has a total undergraduate enrollment of 1,813, its setting is city, and the campus size is 55 acres. It utilizes a semester-based academic calendar. Edgewood College's ranking in the 2017 edition of Best Colleges is National Universities, 171. Its tuition and fees are $27,530 (2016-17).",
        "Tuition and fees": "$27,530",
        "In-state": "",
        "Undergrad Enrollment": "1,813"
    },
    {
        "Name": "Florida Institute of Technology",
        "Location": "Melbourne",
        "State": "FL",
        "Rank": 171,
        "Description": "The Florida Institute of Technology, known as Florida Tech, was originally started as training grounds for space industry professionals working at what is now the Kennedy Space Center. But the school also offers undergraduate degree programs in science, engineering, liberal arts, psychology, STEM education and . About half of the student body enrolls in the school's College of Engineering. The school's location on what's known as the Space Coast of the Atlantic Ocean puts students in an ideal spot for water sports such as surfing, boating, kayaking and fishing. For a more traditional collegiate athletic outlet, students can check out the Florida Tech Panthers sports teams, which compete in the NCAA Division II Sunshine State Conference. There are also more than 100 student organizations to consider joining, including about 10 fraternities and sororities. Florida Tech runs a variety of science-focused research centers and institutes, including the Wind and Hurricane Impact Research Laboratory, or WHIRL, and the Institute for Marine Research. There are programs for graduate students, too, through the Florida Tech engineering school, education school and . Notable alumni of Florida Tech include Ann Dunwoody, the first female four-star general in the U.S. Army, and David King, former director of the NASA Marshall Space Flight Center.",
        "Tuition and fees": "$40,446",
        "In-state": "",
        "Undergrad Enrollment": "3,586"
    },
    {
        "Name": "University of Idaho",
        "Location": "Moscow",
        "State": "ID",
        "Rank": 171,
        "Description": "University of Idaho is located in the northwestern part of the state, in the city of Moscow. Undergraduates at Idaho can choose from many majors within eight colleges, and graduate students can earn degrees in more than 80 master's programs, including business, law, engineering and education. Outside the classroom, students can join more than 200 organizations, play club-level or intramural sports or explore the city. Moscow is home to movie theaters, caf��s, restaurants and the four-day Lionel Hampton Jazz Festival. Student athletes can try out for Idaho's silver-and-gold sports teams, which are called the Vandals, thanks to an old newspaper account of the 1917 basketball team vandalizing its opponents on the court. The Vandals mainly compete in the NCAA Division I Big Sky Conference. Notable Idaho alumni include Mark Felt, better known as Deep Throat, who was the source to reporters during the Watergate political scandal in the 1970s.",
        "Tuition and fees": "$22,040",
        "In-state": "$7,232",
        "Undergrad Enrollment": "9,116"
    },
    {
        "Name": "University of Louisville",
        "Location": "Louisville",
        "State": "KY",
        "Rank": 171,
        "Description": "The University of Louisville is located in Kentucky on the banks of the Ohio River, about 100 miles from both Indianapolis and Cincinnati. Students at U of L, as it is known, can major in more than 170 areas of study, including master's programs in the Louis D. Brandeis School of Law and in the fields of business and medicine. Outside the classroom, University of Louisville students can join more than 400 campus organizations, pledge with about 30 fraternities and sororities and play intramural sports. More serious athletes can try out for the Louisville Cardinals varsity teams, which compete in the NCAA Division I Atlantic Coast Conference. On campus, U of L students can also check out the art museum, planetarium and Auguste Rodin's original sculpture of The Thinker. In the city of Louisville, U of L students can go to the zoo, the Kentucky Shakespeare Festival and the famous Kentucky Derby horse race. Notable University of Louisville alumni include radio journalist Bob Edwards and the late Frank Neuhauser, who won the first National Spelling Bee in 1925 when he successfully spelled the word \"gladiolus.",
        "Tuition and fees": "$24,626",
        "In-state": "$10,738",
        "Undergrad Enrollment": "15,769"
    },
    {
        "Name": "University of Wyoming",
        "Location": "Laramie",
        "State": "WY",
        "Rank": 171,
        "Description": "The University of Wyoming campus is situated between two mountain ranges in the southeast corner of the state, in the town of Laramie. The university, often abbreviated to UW, offers nearly 200 areas of study, including graduate programs in the fields of business, law, engineering and education. UW students can also earn academic credit by taking classes in the National Outdoor Leadership School (NOLS). Through this program, students can explore many interesting places and activities in courses such as Alaska Mountaineering, Himalaya Backpacking and Baja Sea Kayaking. On campus, students can get involved in more than 200 organizations and participate in events such as Battle of the Bands and UW's Got Talent. Student athletes can play for many teams at the intramural, club and varsity level. The Wyoming Cowboys and Cowgirls intercollegiate teams compete in the NCAA Division I Mountain West Conference. Notable UW alumni include Dick Cheney, former vice president of the United States.",
        "Tuition and fees": "$16,215",
        "In-state": "$5,055",
        "Undergrad Enrollment": "10,045"
    },
    {
        "Name": "Ball State University",
        "Location": "Muncie",
        "State": "IN",
        "Rank": 176,
        "Description": "Ball State University is located in Muncie, Indiana, about an hour northeast of Indianapolis. Students at Ball State can choose from about 180 undergraduate majors, including an entrepreneurship program. In their senior year, entrepreneurship students must pass the New Venture Creation course, for which they develop a business plan that is presented to a panel of business professionals before graduation. Master's students at Ball State University can earn degrees in more than 100 fields, including those in the Miller College of Business and the Teachers College. Outside the classroom, Ball State students can get involved in more than 350 campus organizations and play club and recreational sports. More serious athletes can try out for the Ball State Cardinals varsity teams, which compete in the NCAA Division I Mid-American Conference. Notable alumni include late-night talk show host David Letterman, who developed a scholarship for creative Ball State media students with average grades.",
        "Tuition and fees": "$25,428",
        "In-state": "$9,654",
        "Undergrad Enrollment": "16,602"
    },
    {
        "Name": "Lipscomb University",
        "Location": "Nashville",
        "State": "TN",
        "Rank": 176,
        "Description": "Founded in 1891, Lipscomb University is a private institution. The school has 57.1 percent of its classes with fewer than 20 students, and the student-faculty ratio at Lipscomb University is 12:1.",
        "Tuition and fees": "$29,756",
        "In-state": "",
        "Undergrad Enrollment": "3,030"
    },
    {
        "Name": "Mississippi State University",
        "Location": "Mississippi State",
        "State": "MS",
        "Rank": 176,
        "Description": "Mississippi State University is located in the city of Starkville, about 170 miles southeast of Memphis. Students at Mississippi State can choose from more than 160 academic degrees, including master's degrees through the Bagley College of Engineering and in the fields of business and education. Mississippi State also has a highly ranked program in the College of Veterinary Medicine. Mississippi State, often called MSU, has held onto many traditions that students still follow. For years, students have rattled cowbells at sports games, attended The Drill pep rally to start off the school year and athletic seasons and cheered with Bully, the live bulldog mascot. The Mississippi Bulldogs varsity teams compete in about 15 sports and are members of the NCAA Division I Southeastern Conference. Students can also get involved by joining MSU's more than 300 campus clubs, pledging with more than 30 fraternities and sororities or running for student government. Notable MSU alumni include bestselling author John Grisham, who earned a degree in accounting.",
        "Tuition and fees": "$20,142",
        "In-state": "$7,502",
        "Undergrad Enrollment": "17,421"
    },
    {
        "Name": "Montclair State University",
        "Location": "Montclair",
        "State": "NJ",
        "Rank": 176,
        "Description": "Montclair State University is located in New Jersey, about 14 miles west of New York City. Students at Montclair can choose from about 300 academic programs, which include master's degrees in the fields of business, education and fine arts. Montclair students can make the most of their studies by visiting the school's Center for Career Services and Cooperative Education, which helps them plan for their future, gain jobs and internships, and research the industry they will likely enter after graduation. Students can get involved outside the classroom by exploring more than 200 clubs, joining Greek life or simply participating in \"Red Hawk Friday,\" in which students show school spirit by wearing Montclair apparel. Student athletes can play at the intramural, club and varsity levels. There are more than 15 Montclair Red Hawks intercollegiate sports teams that compete in the NCAA Division III New Jersey Athletic Conference. Bruce Willis, star of the \"Die Hard\" movies and \"Pulp Fiction,\" attended Montclair and later received an honorary degree.",
        "Tuition and fees": "$20,318",
        "In-state": "$11,771",
        "Undergrad Enrollment": "16,336"
    },
    {
        "Name": "Texas Tech University",
        "Location": "Lubbock",
        "State": "TX",
        "Rank": 176,
        "Description": "Texas Tech University is a large research institution in the college town of Lubbock. Students are required to live on campus until they have completed 30 hours of course work. The Texas Tech Red Raiders sports teams compete in the NCAA Big 12 Conference and are particularly competitive in football and basketball. Students can join more than 450 student organizations, including Texas Tech's large Greek community, made up of about 50 fraternities and sororities. The university also runs research centers and institutes, including the National Wind Institute. The school offers a wide variety of graduate programs, including degrees through the Jerry S. Rawls College of Business Administration, the Edward E. Whitacre Jr. College of Engineering and the School of Law. Notable alumni of Texas Tech University include Ed Whitacre, former chairman and CEO of both AT&T and General Motors and the namesake of the engineering school; Grammy-nominated country singer Pat Green; and actor Brad Leland, who appeared in both the feature film and television series \"Friday Night Lights.",
        "Tuition and fees": "$22,861",
        "In-state": "$10,622",
        "Undergrad Enrollment": "29,237"
    },
    {
        "Name": "University of Central Florida",
        "Location": "Orlando",
        "State": "FL",
        "Rank": 176,
        "Description": "The University of Central Florida is, fittingly, a school that's spread across the middle of the state. UCF is based in Orlando and has more than 10 regional campuses in locations including Daytona Beach, Ocala and South Lake. Freshmen at the Orlando campus are not required to live on campus and, because of limited space, those who hope to are encouraged to apply early for housing. There are more than 40 fraternities and sororities in the school's large Greek system, as well as more than 300 other student organizations to consider joining. The UCF Knights compete in the NCAA Division I American Athletic Conference. The University of Central Florida has many programs for graduate students, too, including those through the College of Business Administration, College of Engineering and Computer Science and College of Education. Notable alumni of the University of Central Florida include Cheryl Hines, an actress who starred in HBO's \"Curb Your Enthusiasm\"; comedian Daniel Tosh, star of Comedy Central's \"Tosh.0\"; and former soccer player Michelle Akers, a member of the National Soccer Hall of Fame.",
        "Tuition and fees": "$22,467",
        "In-state": "$6,368",
        "Undergrad Enrollment": "54,513"
    },
    {
        "Name": "University of New Mexico",
        "Location": "Albuquerque",
        "State": "NM",
        "Rank": 176,
        "Description": "Founded in 1889, University of New Mexico is a public institution. University of New Mexico follows a semester-based academic calendar and its admissions are considered selective.",
        "Tuition and fees": "$21,302",
        "In-state": "$7,071",
        "Undergrad Enrollment": "20,522"
    },
    {
        "Name": "Andrews University",
        "Location": "Berrien Springs",
        "State": "MI",
        "Rank": 183,
        "Description": "Founded in 1874, Andrews University is a private institution. The school has 69.4 percent of its classes with fewer than 20 students, and the student-faculty ratio at Andrews University is 9:1.",
        "Tuition and fees": "$27,684",
        "In-state": "",
        "Undergrad Enrollment": "1,733"
    },
    {
        "Name": "Azusa Pacific University",
        "Location": "Azusa",
        "State": "CA",
        "Rank": 183,
        "Description": "Founded in 1899, Azusa Pacific University is a private institution. Azusa Pacific University offers a Greek system, where 0 percent of the student body is involved in a sorority and 0 percent is involved in a fraternity.",
        "Tuition and fees": "$36,120",
        "In-state": "",
        "Undergrad Enrollment": "5,883"
    },
    {
        "Name": "University of Maine",
        "Location": "Orono",
        "State": "ME",
        "Rank": 183,
        "Description": "Located on the banks of the Stillwater River in the town of Orono, the University of Maine campus is about 60 miles from the Atlantic coast and approximately 100 miles from the Canadian border. At the University of Maine, students can choose from nearly 90 undergraduate majors and more than 70 master's degree programs, including business, law, engineering and education. Outside the classroom, University of Maine students participate in many annual events. When freshmen move into the dorms before fall semester, faculty and staff volunteers greet the new students, help them move in and direct traffic as part of the Maine Hello program. Each spring, classes are canceled for Maine Day, when the university community hosts a parade, and then everyone helps clean the campus. The university, often called UMaine, also has more than 200 student organizations and about 25 fraternities and sororities for students to join. Student athletes at UMaine can get involved at the intramural, club and varsity levels. The UMaine Black Bears intercollegiate sports teams compete in various conferences of the NCAA Division I and are best known for hockey. Notable UMaine alumni include bestselling horror author Stephen King, who wrote \"Carrie\" and \"The Green Mile.",
        "Tuition and fees": "$29,498",
        "In-state": "$10,628",
        "Undergrad Enrollment": "9,297"
    },
    {
        "Name": "West Virginia University",
        "Location": "Morgantown",
        "State": "WV",
        "Rank": 183,
        "Description": "West Virginia University is a public institution located along the Monongahela River in the small city of Morgantown in the northern part of the state. WVU offers nearly 200 bachelor's, master's, doctoral and professional programs within 15 colleges. A few of the graduate degrees available include those in the College of Business and Economics, the College of Engineering and Mineral Resources and the School of Medicine, which is home to the highly ranked rural medicine and primary care programs. Students who want to take a break from academics for the weekend can take a road trip from the WVU campus, situated near the Pennsylvania border, to the cities of Pittsburgh, Cleveland or Washington. Students at WVU can help others through the Center for Service and Learning, which gives class credit for community service and promotes events such as Random Acts of Kindness Week. There are also more than 400 student organizations for students to try, including nearly 30 Greek chapters, as well as club and intramural sports. For varsity athletics, students can choose from nearly 20 WVU Mountaineers teams, which compete in the NCAA Division I Big 12 Conference. Notable WVU alumni include Don Knotts, better known as the gawky deputy Barney Fife in \"The Andy Griffith Show.",
        "Tuition and fees": "$21,432",
        "In-state": "$7,632",
        "Undergrad Enrollment": "22,498"
    },
    {
        "Name": "Widener University",
        "Location": "Chester",
        "State": "PA",
        "Rank": 183,
        "Description": "Widener University is located in Chester, Pennsylvania, about 15 miles south of Philadelphia. The school began as a preparatory school for boys in 1821, became a military academy a few decades later, and is now a coed university with more than 40 undergraduate programs. Students at Widener University can also pursue a variety of master's degree programs, including business, law and education. Part of Widener University's mission is to help the local community, so each year, many Widener students tutor and mentor local children, build houses, donate blood and help low-income Chester residents with their taxes. At Widener University, students can get involved in more than 80 campus clubs, pledge with about 10 fraternities and sororities and play intramural sports. More serious athletes can join the Widener Pride athletic teams, which compete in the NCAA Division III Commonwealth Conference. Esteemed director Cecil B. DeMille, whose films include \"The Ten Commandments\" and \"Cleopatra,\" attended Widener when it was known as Pennsylvania Military College.",
        "Tuition and fees": "$42,870",
        "In-state": "",
        "Undergrad Enrollment": "3,554"
    },
    {
        "Name": "Kent State University",
        "Location": "Kent",
        "State": "OH",
        "Rank": 188,
        "Description": "Kent State University is located in northeastern Ohio, about 40 miles south of Cleveland, with seven regional campuses situated across the state. Students at Kent State can choose from more than 300 academic programs, including graduate degrees from the College of Business Administration, the College of Education, Health and Human Services and the highly ranked School of Speech Pathology and Audiology. Undergraduates at Kent State have a unique opportunity to earn a degree in peace and conflict studies, which is offered through the Center for Applied Conflict Management. This center was created shortly after the headline-making 1970 incident in which Ohio National Guardsmen killed four Kent State students during a Vietnam War protest. Outside the classroom, Kent State students can get involved in more than 200 campus organizations, including Greek life, leadership programs and community service clubs. There are also many events nearby at the Blossom Music Center, the Porthouse Theatre and the Wick Poetry Center, as well as in the neighboring cities of Cleveland and Akron. Student athletes can get involved by playing intramural sports or by trying out for the many Kent State Golden Flashes varsity teams, which compete in the NCAA Division I Mid-American Conference. The members of new wave band Devo attended Kent, as did actor Michael Keaton, comedian Drew Carey and writer David Sedaris, although they did not graduate. Kent State alumni include former talk show host Arsenio Hall and many NFL players, including two-time Super Bowl winner James Harrison.",
        "Tuition and fees": "$18,376",
        "In-state": "$10,012",
        "Undergrad Enrollment": "23,607"
    },
    {
        "Name": "North Dakota State University",
        "Location": "Fargo",
        "State": "ND",
        "Rank": 188,
        "Description": "North Dakota State University is located in the city of Fargo, on the eastern border of the state. Undergraduates at North Dakota State can choose from more than 100 academic majors, and graduate students can study many master's programs as well, including business, engineering and education. Outside the classroom, NDSU students can get involved by exploring nearly 300 campus clubs, pledging with more than 10 fraternities and sororities, and joining student government. Student athletes can try out for the yellow and green NDSU Bison varsity teams, also known as the \"Thundering Herd,\" which compete in the NCAA Division I Summit League and Missouri Valley Football Conference. NDSU teams were previously named the Farmers and the Aggies, but athletic officials wanted them to be known as something fiercer, and so chose an animal that once roamed the state in large numbers. Notable North Dakota State alumni include Alf Clausen, Emmy Award-winning music director for \"The Simpsons\" television show.",
        "Tuition and fees": "$19,790",
        "In-state": "$9,046",
        "Undergrad Enrollment": "12,037"
    },
    {
        "Name": "Pace University",
        "Location": "New York",
        "State": "NY",
        "Rank": 188,
        "Description": "With two main campuses, Pace University offers its students two distinct collegiate experiences. At the school's New York City campus, students live and learn amid the bustle of Manhattan's Financial District. About 30 miles away, students can enjoy a suburban lifestyle on the school's Westchester campus in Pleasantville, New York. Undergraduates have on-campus housing options at both locations, though many students choose to commute. Each campus also has its own selection of student organizations, including fraternities and sororities. The Pace University sports teams, known as the Setters, compete in the NCAA Division II Northeast-10 Conference. \"Inside the Actors Studio,\" a television show, is filmed at Pace's Michael Schimmel Center for the Arts at the New York City campus, so students can attend tapings for free. Pace also has a law school, which is particularly well regarded for environmental law, and the Lubin School of Business. Notable alumni of Pace University include James Quinn, former president of Tiffany & Co., and Ivan Seidenberg, former CEO of Verizon Communications Inc. Culinary whiz Rachael Ray attended Pace University, though she dropped out after two years.",
        "Tuition and fees": "$42,772",
        "In-state": "",
        "Undergrad Enrollment": "8,747"
    },
    {
        "Name": "Robert Morris University",
        "Location": "Moon Township",
        "State": "PA",
        "Rank": 188,
        "Description": "Founded in 1921, Robert Morris University is a private institution. Robert Morris University follows a semester-based academic calendar and its admissions are considered selective.",
        "Tuition and fees": "$28,250",
        "In-state": "",
        "Undergrad Enrollment": "4,497"
    },
    {
        "Name": "Suffolk University",
        "Location": "Boston",
        "State": "MA",
        "Rank": 188,
        "Description": "Visitors to the Massachusetts State House in the heart of downtown Boston have surely come across the campus of Suffolk University, situated in the historic neighborhood of Beacon Hill. Students are not required to live on campus during their career at the university, and the majority of undergraduate students live off campus in apartments or commute from home. The Suffolk Rams are members of the NCAA Division III Great Northeast Athletic Conference and the Eastern College Athletic Conference. The school hosts about a dozen varsity sports and provides seasonal intramural sports for its student body.",
        "Tuition and fees": "$35,578",
        "In-state": "",
        "Undergrad Enrollment": "5,565"
    },
    {
        "Name": "University of Hartford",
        "Location": "West Hartford",
        "State": "CT",
        "Rank": 188,
        "Description": "The University of Hartford, also known as UHart or U of H, is located in central Connecticut, midway between Boston and New York City. Undergraduates at the University of Hartford can choose from more than 80 fields of study, and graduate students can pursue degrees in more than 30 programs, including those in the Barney School of Business and the College of Education, Nursing and Health Professions. Students at the University of Hartford embrace traditions such as the Martin Luther King Jr. celebration; Midnight Breakfast, during which students are served late-night food during finals week; and Spring Fling, an annual party with live music and food. For another tradition, freshmen sign a class banner that hangs in the library foyer for four years until it's presented again at their graduation ceremony. The University of Hartford also offers dozens of organizations for students to explore, including fraternities and sororities and recreational sports. Student athletes can also try out for one of the Hartford Hawks sports teams, which compete in the NCAA Division I America East Conference.",
        "Tuition and fees": "$37,790",
        "In-state": "",
        "Undergrad Enrollment": "5,246"
    },
    {
        "Name": "Bowling Green State University",
        "Location": "Bowling Green",
        "State": "OH",
        "Rank": 194,
        "Description": "Bowling Green State University is located in northern Ohio, about 85 miles south of Detroit and 115 miles west of Cleveland. Freshmen at BGSU may join a Learning Community, which allows them to take a course with and live near other students who share a common interest. Undergraduates at Bowling Green can choose from more than 200 degrees, and master's students can choose from about 50 graduate programs, including in the fields of business, education and health. The BGSU campus is home to several unique buildings, such as the music building, which looks like a baby grand piano from above, and the recreation center, which resembles the school's falcon mascot from above. Students can join nearly 300 clubs, about 40 Greek organizations and maybe even the SICSIC spirit crew. This group, which has been around since the 1940s, consists of six anonymous members who dress in Halloween masks and work uniforms and secretly post spirit messages and signs on campus. Student athletes can play at the recreational level or try out for one of the many BGSU Falcons varsity sports teams, which compete in the NCAA Division I Mid-American Conference. Notable alumni include Academy Award-winning actress Eva Marie Saint, who was named Bowling Green's Pi Kappa Alpha Dream Girl before she went on to star in the movies \"On the Waterfront\" and Alfred Hitchcock's \"North by Northwest.",
        "Tuition and fees": "$18,332",
        "In-state": "$10,796",
        "Undergrad Enrollment": "14,334"
    },
    {
        "Name": "University of Houston",
        "Location": "Houston",
        "State": "TX",
        "Rank": 194,
        "Description": "The University of Houston is situated in one of the largest cities in the country, which puts students in an ideal location to find internships and research opportunities. The campus is located in downtown Houston, and freshmen are not required to live on campus. Each year, students turn the campus into a town called Fiesta City in time for the Frontier Fiesta, a string of concerts, talent shows, cook-offs and . There are more than 400 student organizations to check out, including fraternities and sororities. The UH Cougars compete in the NCAA Division I American Athletic Conference and are well known for football and basketball. With more than 40 centers, the University of Houston is devoted to research and community initiatives. There are a wide variety of graduate programs, including the University of Houston Law Center, which is well known for health care law and intellectual property law, as well as for its part-time law program. There is also the C.T. Bauer College of Business and the Cullen College of Engineering, among other graduate schools. Actors and brothers Randy and Dennis Quaid, country singer Kenny Rogers and Olympic track star Carl Lewis attended the University of Houston.",
        "Tuition and fees": "$25,410",
        "In-state": "$10,710",
        "Undergrad Enrollment": "34,716"
    },
    {
        "Name": "Western Michigan University",
        "Location": "Kalamazoo",
        "State": "MI",
        "Rank": 194,
        "Description": "Western Michigan University is located in the city of Kalamazoo, midway between Detroit and Chicago. The university offers more than 140 undergraduate programs and many master's degrees as well, including those in the Haworth College of Business, the College of Engineering and Applied Sciences and the College of Education and Human Development. Graduate students interested in careers in health can enroll in highly ranked programs training speech-language pathologists, physician assistants, rehabilitation counselors and audiologists. Outside the classroom, WMU students can get involved by exploring more than 300 student organizations, playing a recreational sport or pledging one of the nearly 30 fraternities and sororities. Off campus, WMU students can check out Kalamazoo's zoo, theater and festivals, or drive 40 minutes to the Lake Michigan beaches of South Haven. Student athletes can try out for the many WMU Broncos varsity sports teams, which compete in the NCAA Division I Mid-American Conference. Notable WMU alumni include Tim Allen, who starred in the television program \"Home Improvement\" and voiced Buzz Lightyear in the animated \"Toy Story\" movies.",
        "Tuition and fees": "$25,713",
        "In-state": "$11,029",
        "Undergrad Enrollment": "18,567"
    },
    {
        "Name": "Indiana University-Purdue University--Indianapolis",
        "Location": "Indianapolis",
        "State": "IN",
        "Rank": 197,
        "Description": "Indiana University-Purdue University Indianapolis, better known as IUPUI, offers more than 250 degrees, including several highly ranked master's programs. In the medical and health fields, IUPUI's well-regarded graduate programs include primary care, nursing and social work. The law school offers a prestigious legal writing program, and there are also notable master's programs in the IUPUI School of Public and Environmental Affairs. Undergraduates at IUPUI can choose from many areas of study, with unique majors such as motorsports engineering. Besides academics, IUPUI students can get involved in many student organizations, as well as Greek life and intramural sports. Student athletes can try out for the IUPUI Jaguars varsity teams, which compete in the NCAA Division I Summit League. IUPUI also hosts many events for students to attend, including the annual International Festival, which presents foods and crafts from around the world. Notable Indiana University-Purdue University Indianapolis alumni include Norman Bridwell, author and illustrator of the \"Clifford the Big Red Dog\" children's books, and Dan Quayle, vice president under George H.W. Bush.",
        "Tuition and fees": "$29,791",
        "In-state": "$9,205",
        "Undergrad Enrollment": "21,985"
    },
    {
        "Name": "Lesley University",
        "Location": "Cambridge",
        "State": "MA",
        "Rank": 197,
        "Description": "Founded in 1909, Lesley University is a private institution. The school has 74.5 percent of its classes with fewer than 20 students, and the student-faculty ratio at Lesley University is 9:1.",
        "Tuition and fees": "$25,750",
        "In-state": "",
        "Undergrad Enrollment": "1,520"
    },
    {
        "Name": "University of Alabama--Huntsville",
        "Location": "Huntsville",
        "State": "AL",
        "Rank": 197,
        "Description": "Located at the southern edge of the Appalachian Mountains, the University of Alabama--Huntsville campus is in the northern part of the state, about 100 miles from Nashville. Students can choose from about 40 academic programs in the colleges of business, engineering, liberal arts, nursing and science. The university, sometimes shortened to UAHuntsville or UAH, offers master's degree programs in business, engineering and nursing, among other fields. Outside the classroom, UAH students can get involved with more than 100 campus clubs, about a dozen fraternities and sororities, The Exponent newspaper and student government. UAHuntsville also offers sports at the intramural, club and varsity levels. The UAH Chargers intercollegiate teams are members of the NCAA Division II Gulf South Conference and compete in about 14 sports. Notable University of Alabama--Huntsville alumni include science fiction author Travis Taylor and John Hendricks, founder and chairman of Discovery Communications, who established a scholarship for UAHuntsville history majors.",
        "Tuition and fees": "$20,622",
        "In-state": "$9,128",
        "Undergrad Enrollment": "6,013"
    },
    {
        "Name": "University of Colorado--Denver",
        "Location": "Denver",
        "State": "CO",
        "Rank": 197,
        "Description": "The main University of Colorado--Denver campus is located downtown, with the Anschutz Medical Campus situated a few miles east in the city of Aurora. Students at CU Denver, as it is known, can choose from more than 130 areas of study, including master's degrees in business, engineering and education. CU Denver has several highly ranked health programs, including nursing and physical therapy, and its School of Medicine has top-ranked programs in family medicine and pediatrics. Students at CU Denver can benefit from their hard work in class when they visit the Scholarship Resource Office, which helps them track down scholarships, perfect their r��sum��s and edit essays. In their free time, CU Denver students can get involved in more than 100 campus organizations, as well as student government, ROTC, The Advocate student newspaper and volunteer opportunities. CU Denver students can also check out the outdoor opportunities offered by the Rocky Mountains and the festivals, rodeos, museums and sports teams of the city of Denver. CU Denver does not offer varsity athletic teams on campus, but students can join intramural sports and \"healthy moves\" classes such as Pilates and yoga.",
        "Tuition and fees": "$29,334",
        "In-state": "$10,404",
        "Undergrad Enrollment": "14,036"
    },
    {
        "Name": "University of Nevada--Reno",
        "Location": "Reno",
        "State": "NV",
        "Rank": 197,
        "Description": "The University of Nevada--Reno is located on the border between the Great Basin and the Sierra Nevada on the western edge of the state. Nevada offers dozens of undergraduate degrees and master's programs, including business, education, medicine and engineering. The university also specializes in earthquake research and is home to one of the largest earthquake-simulation laboratories in the country. Outside the classroom and lab, Nevada students can explore more than 200 student organizations, pledge with about 20 fraternities and sororities and participate in the school's many traditions. Each fall, students paint a big Nevada \"N\" on Peavine Peak, which overlooks campus, and during basketball season, fans cheer on the team as part of the \"Blue Crew.\" Student athletes can play at the intramural level or try out for one of the many Nevada Wolf Pack varsity sports teams, which compete in the NCAA Division I Mountain West Conference. Off campus, Nevada students can visit nearby Lake Tahoe, check out the museums and festivals of Reno and drive just a few hours to California's capital, Sacramento, or the San Francisco Bay Area.",
        "Tuition and fees": "$21,052",
        "In-state": "$7,142",
        "Undergrad Enrollment": "17,770"
    },
    {
        "Name": "California State University--Fullerton",
        "Location": "Fullerton",
        "State": "CA",
        "Rank": 202,
        "Description": "California State University--Fullerton (CSUF) is located in the center of Orange County, about 30 miles from Los Angeles. The school offers more than 50 undergraduate degrees and nearly 50 master's programs, including those in the Mihaylo College of Business and Economics, the education school, and the highly ranked midwifery and anesthesiology programs in the nursing department. Outside the classroom, Cal State Fullerton students can explore more than 50 clubs, join a fraternity or sorority, or play in an intramural sports team. Many students also simply soak up the sunshine of Orange County, visit the beach nearby, and explore L.A.. For student athletes, CSUF offers several Division I varsity sports teams, which compete in various conferences. The school's sports teams are called the Titans, and its mascot is an elephant named Tuffy Titan, who came to be after CSUF hosted a highly publicized intercollegiate elephant race in the 1960s. Notable Cal State Fullerton alumni include Academy Award winner Kevin Costner, who starred in Dances with Wolves and Field of Dreams.",
        "Tuition and fees": "$17,596",
        "In-state": "$6,436",
        "Undergrad Enrollment": "33,144"
    },
    {
        "Name": "Central Michigan University",
        "Location": "Mount Pleasant",
        "State": "MI",
        "Rank": 202,
        "Description": "Central Michigan University is located in Mount Pleasant, about 150 miles northwest of Detroit. At CMU, students can earn bachelor's degrees in more than 200 fields and master's degrees in many programs as well, including business, health and fine arts. CMU is one of the nation's 100 largest universities and has more than 50 locations across North America, including in Hawaii and Canada. On the Mount Pleasant campus, CMU students can get involved in nearly 400 clubs, many fraternities and sororities, and the CMU Volunteer Center. Many student volunteers participate in the Alternative Break program, through which they spend their breaks from the academic year volunteering in places such as New Orleans and Brazil. CMU also hosts many annual events, such as a cardboard boat race during Homecoming and Native American Heritage Month, when the school celebrates its relationship with the local Saginaw Chippewa Tribe. Student athletes can play recreational sports or try out for the more than 15 CMU Chippewas varsity teams, which compete in the NCAA Division I Mid-American Conference. Notable CMU alumni include sports broadcaster Dick Enberg.",
        "Tuition and fees": "$23,670",
        "In-state": "$12,150",
        "Undergrad Enrollment": "20,498"
    },
    {
        "Name": "Louisiana Tech University",
        "Location": "Ruston",
        "State": "LA",
        "Rank": 202,
        "Description": "Founded in 1894, Louisiana Tech University is a public institution. Louisiana Tech University follows a quarter-based academic calendar and its admissions are considered more selective.",
        "Tuition and fees": "$25,851",
        "In-state": "$8,853",
        "Undergrad Enrollment": "10,682"
    },
    {
        "Name": "South Dakota State University",
        "Location": "Brookings",
        "State": "SD",
        "Rank": 202,
        "Description": "Founded in 1881, South Dakota State University is a public institution. The school has 32.4 percent of its classes with fewer than 20 students, and the student-faculty ratio at South Dakota State University is 17:1.",
        "Tuition and fees": "$11,403",
        "In-state": "$8,172",
        "Undergrad Enrollment": "11,007"
    },
    {
        "Name": "University of Alaska--Fairbanks",
        "Location": "Fairbanks",
        "State": "AK",
        "Rank": 202,
        "Description": "University of Alaska--Fairbanks is a public institution that was founded in 1917. It has a total undergraduate enrollment of 7,610, its setting is urban, and the campus size is 2,250 acres. It utilizes a semester-based academic calendar. University of Alaska--Fairbanks's ranking in the 2017 edition of Best Colleges is National Universities, 202. Its in-state tuition and fees are $7,799 (2016-17); out-of-state tuition and fees are $22,469 (2016-17).",
        "Tuition and fees": "$22,469",
        "In-state": "$7,799",
        "Undergrad Enrollment": "7,610"
    },
    {
        "Name": "University of North Carolina--Charlotte",
        "Location": "Charlotte",
        "State": "NC",
        "Rank": 202,
        "Description": "Founded in 1946, University of North Carolina--Charlotte is a public institution. University of North Carolina--Charlotte follows a semester-based academic calendar and its admissions are considered selective.",
        "Tuition and fees": "$20,193",
        "In-state": "$6,617",
        "Undergrad Enrollment": "22,732"
    },
    {
        "Name": "University of North Dakota",
        "Location": "Grand Forks",
        "State": "ND",
        "Rank": 202,
        "Description": "The University of North Dakota is located in the city of Grand Forks on the eastern edge of the state, just a few miles from the Minnesota border. Students at the University of North Dakota can study in more than 200 academic fields, including graduate programs in business, law, engineering and education. The University of North Dakota, which is often abbreviated to UND, also has a highly ranked rural medicine program in its School of Medicine and Health Sciences. Outside the classroom, students can join more than 200 campus clubs, get involved in Greek life and participate in student government. Student athletes can play at the intramural level or try out for North Dakota varsity sports teams, which compete in the NCAA Division I in various conferences. Notable UND alumni include Chuck Klosterman, author of several books including \"Sex, Drugs, and Cocoa Puffs: A Low Culture Manifesto,\" and Sally Smith, CEO of the Buffalo Wild Wings restaurant franchise.",
        "Tuition and fees": "$18,899",
        "In-state": "$4,965",
        "Undergrad Enrollment": "11,577"
    },
    {
        "Name": "University of South Dakota",
        "Location": "Vermillion",
        "State": "SD",
        "Rank": 202,
        "Description": "Founded in 1862, University of South Dakota is a public institution. University of South Dakota offers a Greek system, where 23 percent of the student body is involved in a sorority and 14 percent is involved in a fraternity.",
        "Tuition and fees": "$11,688",
        "In-state": "$8,457",
        "Undergrad Enrollment": "7,435"
    },
    {
        "Name": "East Carolina University",
        "Location": "Greenville",
        "State": "NC",
        "Rank": 210,
        "Description": "East Carolina University is located in Greenville, North Carolina, about 80 miles from the state capital of Raleigh. The university offers more than 100 undergraduate degrees and more than 75 master's programs, including those in the fields of business and education. Graduate students can also study in the Brody School of Medicine, which has a highly ranked rural medicine program. At the Nancy W. Darden Child Development Center, students focusing on birth to kindergarten education can observe and interact with small children. ECU students can get involved by joining more than 300 campus clubs, pledging with numerous fraternities and sororities or playing in a wide variety of intramural sports. More serious athletes can try out for the ECU Pirates varsity teams, which compete in the NCAA Division I American Athletic Conference. Notable ECU alumni include actress Sandra Bullock, who won an Academy Award for her role in \"The Blind Side,\" and Vince and Linda McMahon, the founders of World Wrestling Entertainment.",
        "Tuition and fees": "$22,904",
        "In-state": "$6,946",
        "Undergrad Enrollment": "23,039"
    },
    {
        "Name": "Montana State University",
        "Location": "Bozeman",
        "State": "MT",
        "Rank": 210,
        "Description": "Located in the city of Bozeman, Montana State University offers about 60 areas of study for undergraduate students. The university also offers more than 40 master's programs, including engineering, education and nursing. Montana State University's research facilities include the Plant Growth Center, with about 30 greenhouses, and the Center for Bison and Wildlife Health. Montana State is also home to the Museum of the Rockies, which has, among other exhibits, an extensive collection of dinosaur fossils. Montana State alumna Mary Schweitzer became famous in the paleontology world when she discovered soft tissue in a Tyrannosaurus rex bone. Montana State, often abbreviated to MSU, also offers many student organizations, Greek life and recreational sports. More serious athletes can try out for the blue-and-gold Montana State Bobcats varsity sports teams, which compete in the NCAA Division I Big Sky Conference. Other notable alumni include Jan Stenerud, who went to MSU on a skiing scholarship, joined the Bobcats football team his junior year and became one of the few Pro Football Hall of Fame placekickers.",
        "Tuition and fees": "$23,042",
        "In-state": "$7,031",
        "Undergrad Enrollment": "13,707"
    },
    {
        "Name": "Old Dominion University",
        "Location": "Norfolk",
        "State": "VA",
        "Rank": 210,
        "Description": "Originally created as a division of the College of William and Mary, Old Dominion University is now an independent institution in Norfolk, Virginia. Students have more than 100 academic programs to choose from and, outside of class, more than 300 clubs and organizations to consider. Freshmen aren't required to live on campus. The ODU sports teams compete in the NCAA Division I Conference USA. The university is also committed to research, operating the Center for Accelerator Science and the Virginia Modeling, Analysis and Simulation Center. Old Dominion University also offers a wide variety of graduate degree programs, including those in the Strome College of Business and the Darden College of Education. Notable alumni of Old Dominion University include Ben Bailey, former host of the TV game show \"Cash Cab,\" and Jay Harris, ESPN \"SportsCenter\" anchor.",
        "Tuition and fees": "$27,028",
        "In-state": "$10,048",
        "Undergrad Enrollment": "20,101"
    },
    {
        "Name": "University of Missouri--Kansas City",
        "Location": "Kansas City",
        "State": "MO",
        "Rank": 210,
        "Description": "At the University of Missouri--Kansas City, students can choose from more than 120 academic programs and majors, including master's degrees from the Henry W. Bloch School of Management and the schools of medicine, computing and engineering, and education. Outside the classroom, UMKC students can explore more than 175 clubs and about 15 Greek-letter organizations. There are about 16 varsity sports teams, named the UMKC Kangaroos, which compete in the NCAA Division I Western Athletic Conference. The university developed the team name in the 1930s, when community excitement about the Kansas City Zoo's purchase of two baby kangaroos grew, and when Walt Disney himself drew a cartoon of the Kasey Kangaroo mascot. Although he never graduated, former President Harry Truman attended the UMKC law school for two years and later received the school's first honorary degree. Today, he is the namesake of the university's Harry S Truman Center for Governmental Affairs.",
        "Tuition and fees": "$22,714",
        "In-state": "$9,551",
        "Undergrad Enrollment": "11,253"
    },
    {
        "Name": "Ashland University",
        "Location": "Ashland",
        "State": "OH",
        "Rank": 214,
        "Description": "At Ashland University, undergraduate students have more than 70 options for majors, including actuarial sciences, multi-age education and digital media production. The university is affiliated with the Brethren Church, and worship opportunities are offered on campus through The Well, a Christian movement, and the Newman Catholic Campus Ministry, among other groups. In addition, there are more than 100 student organizations to check out, and many Ashland students opt to join a fraternity or sorority. Student athletes compete as the Ashland Eagles in the NCAA Division II Great Lakes Intercollegiate Athletic Conference. Among the graduate school offerings at Ashland University is the Dwight Schar College of Education. For road trips from campus, Ashland is within driving distance of major Ohio cities, including Akron, Cleveland and Columbus.",
        "Tuition and fees": "$20,392",
        "In-state": "",
        "Undergrad Enrollment": "3,716"
    },
    {
        "Name": "Dallas Baptist University",
        "Location": "Dallas",
        "State": "TX",
        "Rank": 214,
        "Description": "At Dallas Baptist University, or DBU, faith is integrated into academics and campus life. The university is divided into academic departments such as the College of Christian Faith and the College of Natural Sciences and Mathematics. The Baptist Student Ministries organizes events, Bible studies, and mission trips, and students can also worship at weekly men's and women's Bible studies meetings; university events such as an annual conference called \"livepure\" and more. The DBU Patriots sports teams compete in the NCAA Division II Heartland Conference and are particularly dominant in baseball. For fun off campus, downtown Dallas is about 15 miles away. Notable alumni of Dallas Baptist University include Christian music artists Chris Clayton and Kari Jobe and former St. Louis Cardinals catcher Jason LaRue.",
        "Tuition and fees": "$26,180",
        "In-state": "",
        "Undergrad Enrollment": "3,315"
    },
    {
        "Name": "Northern Illinois University",
        "Location": "DeKalb",
        "State": "IL",
        "Rank": 214,
        "Description": "Northern Illinois University is located about 65 miles west of Chicago in the city of DeKalb. Graduate students can choose from about 80 master's degrees, including those offered by the colleges of business and law and the highly ranked Division of Public Administration. Undergraduates can choose from about 60 academic majors and participate in the Research Rookies program, which gives freshmen and sophomores a chance to conduct research in their field of study under faculty guidance. Many students at Northern Illinois University choose to study abroad, and the school offers programs for academic credit in about 75 countries. On campus, Northern Illinois students can join more than 200 clubs and about 40 Greek-letter organizations. The university is also home to numerous varsity athletic teams, which compete in the NCAA Division I Mid-American Conference. The NIU sports teams are known as the Huskies, but that hasn't always been the case. They were called the Teachers and the Profs in the school's early days as a teachers college, and they have been nicknamed the Cardinals and the Northerners as well. Notable NIU alumni include Dan Castellaneta, who voices Homer Simpson and several other characters on the animated television show \"The Simpsons.",
        "Tuition and fees": "$23,799",
        "In-state": "$14,334",
        "Undergrad Enrollment": "15,027"
    },
    {
        "Name": "Nova Southeastern University",
        "Location": "Ft. Lauderdale",
        "State": "FL",
        "Rank": 214,
        "Description": "Founded in 1964, Nova Southeastern University is a private institution. The school has 78.2 percent of its classes with fewer than 20 students, and the student-faculty ratio at Nova Southeastern University is 16:1.",
        "Tuition and fees": "$27,660",
        "In-state": "",
        "Undergrad Enrollment": "4,641"
    },
    {
        "Name": "Southern Illinois University--Carbondale",
        "Location": "Carbondale",
        "State": "IL",
        "Rank": 214,
        "Description": "Founded in 1869, Southern Illinois University--Carbondale is a public institution. Southern Illinois University--Carbondale offers a Greek system, where 5 percent of the student body is involved in a sorority and 4 percent is involved in a fraternity.",
        "Tuition and fees": "$27,130",
        "In-state": "$13,481",
        "Undergrad Enrollment": "13,031"
    },
    {
        "Name": "University of Montana",
        "Location": "Missoula",
        "State": "MT",
        "Rank": 214,
        "Description": "The University of Montana campus in Missoula is situated by the Clark Fork River, near Mount Sentinel in the western part of the state. Students at the University of Montana can choose from numerous academic programs, including graduate degrees in the Phyllis J. Washington College of Education and Human Sciences, and in the schools of business and law. University of Montana students can also earn course credit by interning with the school's Program in Ecological Agriculture and Society (PEAS). During the internship, students work on the university's 10-acre farm, which produces crops for emergency food shelters. The university, which is often abbreviated to UM, also offers many academic programs and student organizations that focus on American Indian culture. Outside the classroom, students can join more than 150 clubs, Greek life and intramural and club sports teams. More serious athletes can try out for the Montana Griz (as in Grizzlies) varsity teams, which compete in the NCAA Division I Big Sky Conference. Notable UM alumni include Carroll O'Connor, who starred as Archie Bunker in the television show \"All in the Family\"; Colin Meloy, the lead singer of The Decemberists; and actor J.K. Simmons, who has appeared in the \"Law & Order\" television show and in the \"Spider-Man\" movies.",
        "Tuition and fees": "$24,562",
        "In-state": "$6,446",
        "Undergrad Enrollment": "8,732"
    },
    {
        "Name": "Benedictine University",
        "Location": "Lisle",
        "State": "IL",
        "Rank": 220,
        "Description": "Founded in 1887, Benedictine University is a private institution. The school has 70.7 percent of its classes with fewer than 20 students, and the student-faculty ratio at Benedictine University is 12:1.",
        "Tuition and fees": "$32,170",
        "In-state": "",
        "Undergrad Enrollment": "3,347"
    },
    {
        "Name": "California State University--Fresno",
        "Location": "Fresno",
        "State": "CA",
        "Rank": 220,
        "Description": "California State University--Fresno is located at the foot of the Sierra Nevada range in the middle of the state. Although the university, commonly known as Fresno State, began as a teachers college, it now offers bachelor's degrees in more than 60 areas of study. Graduate students can choose from more than 40 master's degree programs, including those in the Craig School of Business. Outside the classroom, many Fresno State students take in the natural beauty of the campus and surrounding region, including the San Joaquin Valley, as well as Yosemite National Park, which is only about 60 miles away. Students at Fresno State can also spend a weekend exploring the city life of San Francisco and Los Angeles, which are each about 200 miles from campus. The city of Fresno has much to offer as well, such as theaters, malls, and restaurants. On campus, Fresno State students can join more than 200 organizations and play for the Fresno State Bulldogs varsity sports teams, which compete in the NCAA Division I Western Athletic Conference.",
        "Tuition and fees": "$17,209",
        "In-state": "$6,313",
        "Undergrad Enrollment": "21,482"
    },
    {
        "Name": "Gardner-Webb University",
        "Location": "Boiling Springs",
        "State": "NC",
        "Rank": 220,
        "Description": "Founded in 1905, Gardner-Webb University is a private institution. Gardner-Webb University follows a semester-based academic calendar and its admissions are considered selective.",
        "Tuition and fees": "$29,850",
        "In-state": "",
        "Undergrad Enrollment": "2,615"
    },
    {
        "Name": "New Mexico State University",
        "Location": "Las Cruces",
        "State": "NM",
        "Rank": 220,
        "Description": "There are five New Mexico State University locations, with the main campus situated in Las Cruces, about 50 miles north of the Mexican border. Undergraduates at NMSU can choose from nearly 90 bachelor's degrees, and graduate students can pursue more than 50 master's programs, including those in the colleges of business, engineering and education. Freshmen who are eligible for NMSU's honors program can take small, specialized classes called \"Journeys of Discovery.\" The university is also home to the Chile Pepper Institute, an organization that researches and promotes the state vegetable. Students at NM State, as it is also known, can get involved on campus by joining more than 200 organizations, pledging with about 20 fraternities and sororities, and running for student government. Student athletes can play at the recreational level or try out for the New Mexico State Aggies varsity teams, which mainly compete in the NCAA Division I Western Athletic Conference.",
        "Tuition and fees": "$21,234",
        "In-state": "$6,729",
        "Undergrad Enrollment": "12,526"
    },
    {
        "Name": "Shenandoah University",
        "Location": "Winchester",
        "State": "VA",
        "Rank": 220,
        "Description": "Shenandoah University is a private institution that was founded in 1875. It has a total undergraduate enrollment of 2,010, its setting is city, and the campus size is 315 acres. It utilizes a semester-based academic calendar. Shenandoah University's ranking in the 2017 edition of Best Colleges is National Universities, 220. Its tuition and fees are $31,322 (2016-17).",
        "Tuition and fees": "$31,322",
        "In-state": "",
        "Undergrad Enrollment": "2,010"
    },
    {
        "Name": "Tennessee Technological University",
        "Location": "Cookeville",
        "State": "TN",
        "Rank": 220,
        "Description": "Founded in 1915, Tennessee Technological University is a public institution. Tennessee Technological University follows a semester-based academic calendar and its admissions are considered more selective.",
        "Tuition and fees": "$24,800",
        "In-state": "$16,311",
        "Undergrad Enrollment": "9,801"
    },
    {
        "Name": "University of Massachusetts--Boston",
        "Location": "Boston",
        "State": "MA",
        "Rank": 220,
        "Description": "Founded in 1964, University of Massachusetts--Boston is a public institution. University of Massachusetts--Boston follows a semester-based academic calendar and its admissions are considered selective.",
        "Tuition and fees": "$32,023",
        "In-state": "$13,435",
        "Undergrad Enrollment": "12,949"
    },
    {
        "Name": "University of Massachusetts--Dartmouth",
        "Location": "North Dartmouth",
        "State": "MA",
        "Rank": 220,
        "Description": "Located about 60 miles south of Boston, the University of Massachusetts--Dartmouth offers more than 50 fields of undergraduate study. Graduate students can choose from more than 35 master's degree programs, including those in the Charlton College of Business, the College of Engineering and the College of Nursing. The university, often called UMass Dartmouth, also offers a ranked fine arts program in its College of Visual and Performing Arts. Outside the classroom, UMass Dartmouth students can get involved through more than 100 campus clubs, about 10 Greek organizations and student government. Students can also explore campus media by checking out The Torch newspaper and the WUMD educational radio station. Student athletes can play at the recreational level or join the UMass Dartmouth Corsairs varsity teams, which mainly compete in the NCAA Division III Little East Conference. Notable University of Massachusetts--Dartmouth alumni include screenwriter and director Brian Helgeland, who won an Academy Award for the \"L.A. Confidential\" screenplay.",
        "Tuition and fees": "$19,270",
        "In-state": "$12,588",
        "Undergrad Enrollment": "7,295"
    },
    {
        "Name": "University of Missouri--St. Louis",
        "Location": "St. Louis",
        "State": "MO",
        "Rank": 220,
        "Description": "Undergraduates at University of Missouri--St. Louis can choose from about 50 bachelor's degree programs. Some may qualify to enroll in the Pierre Laclede Honors College, which offers a more challenging curriculum, smaller class sizes and a writing project that ends in a senior capstone. Graduate students can pursue about 30 master's programs, including the highly ranked criminology program, as well as business and education, among others. On campus, UMSL students can get involved in more than 120 organizations, including fraternities and sororities and student government. UMSL students can also explore campus media opportunities by becoming a DJ on The U radio station or by writing for The Current newspaper. Student athletes can play recreational sports or try out for the UMSL Tritons varsity teams, which compete in the NCAA Division II Great Lakes Valley Conference. Notable alumni include Gary Belsky, former editor-in-chief of \"ESPN The Magazine,\" and actress Phyllis Smith, who appeared on NBC's \"The Office.",
        "Tuition and fees": "$26,277",
        "In-state": "$10,065",
        "Undergrad Enrollment": "13,569"
    },
    {
        "Name": "University of North Carolina--Greensboro",
        "Location": "Greensboro",
        "State": "NC",
        "Rank": 220,
        "Description": "University of North Carolina--Greensboro is located in the central part of the state, about midway between Washington and Atlanta. Undergraduates at UNCG can choose from more than 100 academic programs, and graduate students can choose from more than 60 degree programs, including those in the Bryan School of Business and Economics and the renowned student counseling and personnel services program in the School of Education. UNCG also offers highly ranked master's programs in the fields of health and library and information studies. Outside the classroom, University of North Carolina--Greensboro students can get involved by joining about 200 organizations, including numerous fraternities and sororities. Each year, there are many campus events for students to attend, including the New Music Festival. Student athletes can play at the intramural and club levels or try out for the UNCG Spartans varsity sports teams, which compete in the NCAA Division I Southern Conference. Notable alumni include Pulitzer Prize-winning poet Claudia Emerson and Tony Award-winning actress Beth Leavel.",
        "Tuition and fees": "$21,595",
        "In-state": "$6,733",
        "Undergrad Enrollment": "15,951"
    },
    {
        "Name": "University of Southern Mississippi",
        "Location": "Hattiesburg",
        "State": "MS",
        "Rank": 220,
        "Description": "The University of Southern Mississippi has two campuses: a main location in Hattiesburg and a complex in Long Beach known as Southern Miss Gulf Coast. In Hattiesburg, there are more than 280 student organizations to check out, as well as annual events such as Crawfish Fest. About 20 percent of students join fraternities and sororities, and participating upperclassmen can live in Greek housing: Fraternity Row for men and a gated community called The Village for women. First-year students live in the Freshman Quad, a housing area next to the football stadium. Football games are a popular outlet on campus, kicking off with Friday Night at the Fountain, a pep rally the night before each home game, and the Eagle Walk parade a few hours before each match. Southern Miss Golden Eagles sports teams compete in the NCAA Division I Conference USA. Graduate students may enroll in programs through the Southern Miss College of Business, the College of Education and Psychology, the School of Criminal Justice and . Notable Southern Miss alumni include NFL quarterback Brett Favre and musician Jimmy Buffett.",
        "Tuition and fees": "$16,094",
        "In-state": "$7,224",
        "Undergrad Enrollment": "11,840"
    },
    {
        "Name": "Utah State University",
        "Location": "Logan",
        "State": "UT",
        "Rank": 220,
        "Description": "Founded in 1888, Utah State University is a public institution. Utah State University offers a Greek system, where 2 percent of the student body is involved in a sorority and 2 percent is involved in a fraternity.",
        "Tuition and fees": "$19,772",
        "In-state": "$6,866",
        "Undergrad Enrollment": "25,259"
    }
];