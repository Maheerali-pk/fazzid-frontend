import { worldIcon } from "./icons";
import { INewsItem } from "@/contexts/GlobalContext";
export interface IState {
   name: string;
   flag?: string;
   count: number;
   id: string;
   isIcon?: boolean;
   icon?: React.ReactNode;
   countryId: string;
}
export interface ICountry {
   name: string;
   flag?: string;
   count: number;
   id: string;
   isIcon?: boolean;
   icon?: React.ReactNode;
}
export const countries: ICountry[] = [
   {
      name: "All",
      isIcon: true,
      icon: worldIcon,
      count: 520,
      id: "1",
      flag: "/images/flags/world.svg",
   },
   { name: "United States", flag: "/images/flags/us.svg", count: 720, id: "2" },
   {
      name: "Pakistan",
      flag: "/images/flags/Pakistan.svg",
      count: 120,
      id: "3",
   },
   { name: "Germany", flag: "/images/flags/Germany.svg", count: 400, id: "4" },
   { name: "UnitedKingdom", flag: "/images/flags/uk.svg", count: 720, id: "5" },
   { name: "Yemen", flag: "/images/flags/Yemen.svg", count: 720, id: "6" },
];

export interface IVideoItem {
   id: number;
   source: string;
   title: string;
   description: string;
   views: string;
   postedTime: string;
   date: string;
   duration: string;
   videoId: string;
   youtubeUrl: string;
   channelLogoUrl: string;
}
export const allVideoItems: IVideoItem[] = [
   {
      id: 1,
      source: "CNN",
      title: "Trump admin issues CHILLING warning amid fears of sleeper cell attack",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      views: "120K",
      postedTime: "2 hours ago",
      date: "May, 15, 2025",
      duration: "0:58",
      videoId: "dQw4w9WgXcQ",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      channelLogoUrl: "/images/flags/us.svg",
   },
   {
      id: 2,
      source: "CNN",
      title: "Trump admin issues CHILLING warning amid fears of sleeper cell attack",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      views: "500K",
      postedTime: "12 hours ago",
      date: "May, 15, 2025",
      duration: "1:30",
      videoId: "9bZkp7q19f0",
      youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      channelLogoUrl: "/images/flags/us.svg",
   },
   {
      id: 3,
      source: "CNN",
      title: "Trump admin issues CHILLING warning amid fears of sleeper cell attack",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      views: "750K",
      postedTime: "16 hours ago",
      date: "May, 15, 2025",
      duration: "2:15",
      videoId: "y6120QOlsfU",
      youtubeUrl: "https://www.youtube.com/watch?v=y6120QOlsfU",
      channelLogoUrl: "/images/flags/us.svg",
   },
   {
      id: 4,
      source: "FOX NEWS",
      title: "Economic report shows unexpected growth in Q3",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      views: "320K",
      postedTime: "10 hours ago",
      date: "May, 15, 2025",
      duration: "3:42",
      videoId: "dQw4w9WgXcQ", // Example YouTube video ID
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      channelLogoUrl: "/images/flags/us.svg",
   },
   {
      id: 5,
      source: "CNN",
      title: "New healthcare legislation passes Senate vote",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      views: "890K",
      postedTime: "8 hours ago",
      date: "May, 15, 2025",
      duration: "2:10",
      videoId: "9bZkp7q19f0", // Example YouTube video ID
      youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      channelLogoUrl: "/images/flags/us.svg",
   },
   {
      id: 6,
      source: "CNN",
      title: "Hurricane Maria approaches east coast",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      views: "1.2M",
      postedTime: "5 hours ago",
      date: "May, 15, 2025",
      duration: "4:15",
      videoId: "y6120QOlsfU", // Example YouTube video ID
      youtubeUrl: "https://www.youtube.com/watch?v=y6120QOlsfU",
      channelLogoUrl: "/images/flags/us.svg",
   },
   {
      id: 7,
      source: "FOX NEWS",
      title: "Trump admin issues CHILLING warning amid fears of sleeper cell attack",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      views: "1M",
      postedTime: "18 hours ago",
      date: "May, 15, 2025",
      duration: "0:58",
      videoId: "dQw4w9WgXcQ", // Example YouTube video ID
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      channelLogoUrl: "/images/flags/us.svg",
   },
   {
      id: 8,
      source: "FOX NEWS",
      title: "Senate committee begins investigation into tech giants",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      views: "450K",
      postedTime: "14 hours ago",
      date: "May, 15, 2025",
      duration: "3:22",
      videoId: "9bZkp7q19f0", // Example YouTube video ID
      youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      channelLogoUrl: "/images/flags/us.svg",
   },
   {
      id: 9,
      source: "FOX NEWS",
      title: "Military exercises planned near Taiwan Strait",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      views: "680K",
      postedTime: "7 hours ago",
      date: "May, 15, 2025",
      duration: "1:45",
      videoId: "y6120QOlsfU", // Example YouTube video ID
      youtubeUrl: "https://www.youtube.com/watch?v=y6120QOlsfU",
      channelLogoUrl: "/images/flags/us.svg",
   },
   {
      id: 10,
      source: "FOX NEWS",
      title: "Global markets respond to trade agreement",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      views: "420K",
      postedTime: "9 hours ago",
      date: "May, 15, 2025",
      duration: "2:45",
      videoId: "dQw4w9WgXcQ",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      channelLogoUrl: "/images/flags/us.svg",
   },
   {
      id: 11,
      source: "CNN",
      title: "Tech leaders testify before Congress",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      views: "860K",
      postedTime: "11 hours ago",
      date: "May, 15, 2025",
      duration: "3:10",
      videoId: "9bZkp7q19f0",
      youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      channelLogoUrl: "/images/flags/us.svg",
   },
];

export const allNewsItems: INewsItem[] = [
   {
      id: 1,
      source: "www.techcrunch.com",
      categories: ["technology", "ai"],
      date: "Oct, 8, 2025",
      title: "AI Breakthrough: New Model Achieves Human-Level Understanding",
      description:
         "Researchers have unveiled a groundbreaking AI system that demonstrates unprecedented comprehension abilities.",
      imageUrl: "https://picsum.photos/seed/tech1/400/300",
   },
   {
      id: 2,
      source: "www.bbc.com",
      categories: ["environment", "climate"],
      date: "Oct, 9, 2025",
      title: "Global Leaders Commit to Net-Zero Emissions by 2040",
      description:
         "In a historic summit, world leaders from over 150 countries have pledged ambitious climate action plans. The comprehensive agreement includes massive investments in renewable energy, carbon capture technology, and sustainable infrastructure development across all continents.",
      imageUrl: "https://picsum.photos/seed/climate2/400/300",
   },
   {
      id: 3,
      source: "www.forbes.com",
      categories: ["business", "finance"],
      date: "Oct, 7, 2025",
      title: "Stock Markets Hit Record Highs",
      description:
         "Markets surge on positive economic indicators and strong corporate earnings reports.",
      imageUrl: "https://picsum.photos/seed/finance3/400/300",
   },
   {
      id: 4,
      source: "www.espn.com",
      categories: ["sports", "football"],
      date: "Oct, 10, 2025",
      title: "Underdog Team Wins Championship in Stunning Upset",
      description:
         "In what many are calling the greatest sports story of the decade, a team that was predicted to finish last in their division has won the championship title. The victory came after an intense final match that went into overtime, with the winning goal scored in the last seconds of play. Fans around the world celebrated this incredible achievement.",
      imageUrl: "https://picsum.photos/seed/sports4/400/300",
   },
   {
      id: 5,
      source: "www.nature.com",
      categories: ["science", "medicine"],
      date: "Oct, 6, 2025",
      title: "New Cancer Treatment Shows Promising Results in Clinical Trials",
      description:
         "Medical researchers announce breakthrough therapy with 85% success rate in early trials.",
      imageUrl: "https://picsum.photos/seed/medical5/400/300",
   },
   {
      id: 6,
      source: "www.space.com",
      categories: ["space", "exploration"],
      date: "Oct, 5, 2025",
      title: "Mars Colony Establishes First Permanent Settlement",
      description:
         "SpaceX and NASA collaborate to create humanity's first sustainable off-world habitat. The colony, named New Horizon, now houses 50 astronauts and scientists who will conduct long-term research on the Red Planet. Advanced life support systems and local resource utilization technologies enable the settlement to be largely self-sufficient.",
      imageUrl: "https://picsum.photos/seed/space6/400/300",
   },
   {
      id: 7,
      source: "www.foodnetwork.com",
      categories: ["lifestyle", "food"],
      date: "Oct, 4, 2025",
      title: "Plant-Based Cuisine Revolution Transforms Restaurant Industry",
      description:
         "The culinary world is experiencing a major shift as innovative chefs develop plant-based dishes that rival traditional cuisine in taste and presentation. Major restaurant chains are expanding their vegan offerings, while new plant-based eateries are opening at record rates. Food critics praise the creativity and sustainability of this movement, which combines cutting-edge food science with traditional cooking techniques to create extraordinary dining experiences. Consumer demand continues to drive this transformation across the global food industry.",
      imageUrl: "https://picsum.photos/seed/food7/400/300",
   },
   {
      id: 8,
      source: "www.theguardian.com",
      categories: ["politics", "international"],
      date: "Oct, 3, 2025",
      title: "Historic Peace Agreement Signed in Middle East",
      description:
         "Diplomatic breakthrough brings hope for lasting stability in the region after decades of conflict.",
      imageUrl: "https://picsum.photos/seed/peace8/400/300",
   },
   {
      id: 9,
      source: "www.wired.com",
      categories: ["technology", "gadgets"],
      date: "Oct, 2, 2025",
      title: "Revolutionary Smartphone Battery Lasts for One Week",
      description:
         "Tech company unveils new battery technology that could change mobile device usage forever. The innovation uses advanced graphene-based materials and smart power management to extend battery life dramatically.",
      imageUrl: "https://picsum.photos/seed/gadget9/400/300",
   },
   {
      id: 10,
      source: "www.rollingstone.com",
      categories: ["entertainment", "music"],
      date: "Oct, 1, 2025",
      title: "Legendary Band Announces Surprise Reunion Tour",
      description:
         "Fans rejoice as iconic rock group reunites after 20-year hiatus.",
      imageUrl: "https://picsum.photos/seed/music10/400/300",
   },
   {
      id: 11,
      source: "www.nationalgeographic.com",
      categories: ["nature", "wildlife"],
      date: "Sep, 30, 2025",
      title: "Rare Species Discovered in Amazon Rainforest",
      description:
         "Scientists discover new primate species during expedition deep in the Amazon. The newly identified species, which has been named the Golden Cascade Monkey, displays unique social behaviors and communication patterns. Researchers emphasize the importance of protecting this pristine habitat to preserve biodiversity.",
      imageUrl: "https://picsum.photos/seed/nature11/400/300",
   },
   {
      id: 12,
      source: "www.cnn.com",
      categories: ["education", "innovation"],
      date: "Sep, 29, 2025",
      title: "Virtual Reality Transforms Classroom Learning",
      description:
         "Educational institutions worldwide are adopting immersive VR technology to enhance student engagement and understanding. Studies show significant improvements in retention and comprehension.",
      imageUrl: "https://picsum.photos/seed/education12/400/300",
   },
   {
      id: 13,
      source: "www.autoblog.com",
      categories: ["automotive", "electric-vehicles"],
      date: "Sep, 28, 2025",
      title: "Electric Vehicle Sales Surpass Traditional Cars for First Time",
      description:
         "Historic milestone reached as EVs dominate the automotive market. Major manufacturers report record sales figures as charging infrastructure expands and battery costs decrease. Industry analysts predict this trend will accelerate in coming years, fundamentally transforming transportation worldwide.",
      imageUrl: "https://picsum.photos/seed/auto13/400/300",
   },
   {
      id: 14,
      source: "www.architecturaldigest.com",
      categories: ["design", "architecture"],
      date: "Sep, 27, 2025",
      title: "Sustainable Skyscraper Generates More Energy Than It Consumes",
      description:
         "Innovative building design sets new standard for urban sustainability with integrated solar panels and wind turbines.",
      imageUrl: "https://picsum.photos/seed/arch14/400/300",
   },
   {
      id: 15,
      source: "www.economist.com",
      categories: ["economics", "global-markets"],
      date: "Sep, 26, 2025",
      title: "Cryptocurrency Becomes Legal Tender in Three More Nations",
      description:
         "Digital currencies gain mainstream acceptance as governments embrace blockchain technology for financial systems.",
      imageUrl: "https://picsum.photos/seed/crypto15/400/300",
   },
];

export const states: IState[] = [
   {
      name: "Alabama",
      count: 720,
      flag: "/images/flags/states/Alabama.png",
      id: "2",
      countryId: "2",
   },
   {
      name: "Alaska",
      count: 120,
      flag: "/images/flags/states/Alaska.png",
      id: "3",
      countryId: "2",
   },
   {
      name: "Arizona",
      count: 400,
      flag: "/images/flags/states/Arizona.png",
      id: "4",
      countryId: "2",
   },
   {
      name: "Arkansas",
      count: 720,
      flag: "/images/flags/states/Arkansas.png",
      id: "5",
      countryId: "2",
   },
   {
      name: "California",
      count: 720,
      flag: "/images/flags/states/California.png",
      id: "2",
      countryId: "2",
   },
   {
      name: "Colorado",
      count: 120,
      flag: "/images/flags/states/Colorado.png",
      id: "3",
      countryId: "2",
   },
];
