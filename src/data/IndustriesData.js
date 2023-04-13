const industries = [
  {
    id: 0,
    name: "Automotive",
    bg: "./Automotive_1.jpg",
    p1: "Welcome to our automotive page! Our team of expert consultants has years of experience working with companies in the automotive industry, from manufacturers and suppliers to dealerships and service providers.",
    p2: "The automotive industry is constantly evolving, with new technologies and trends emerging all the time. At our consulting firm, we stay up-to-date on the latest developments and work with our clients to help them stay ahead of the curve.",
    p3: "Whether you're a manufacturer, supplier, dealership, or service provider in the automotive industry, our consulting firm can help you achieve your goals and succeed in a rapidly changing marketplace. Contact us today to learn more about our services and how we can help your business thrive.",
    whatwedo: [
      "Market research",
      "Strategic planning",
      "Operational improvement",
      "Technology implementation",
    ],
    carousel: 
    [
      0,1,  
    ],
  },
  {
    id: 1,
    name: "Communications And Media",
    bg: "./Communications And Media_1.jpg",
    p1: "We provide strategic communications and media consulting services to help our clients build brand awareness, engage audiences, and navigate industry disruptions.",
    p2: "Our team of experienced consultants has a deep understanding of the communications and media landscape and can develop customized solutions to meet your business goals.",
    p3: "We stay up-to-date on the latest trends and developments in the communications and media industry and share our insights through original research, whitepapers, and blog posts.",
    whatwedo: [
      "Content strategy",
      "Social media management",
      "Crisis communications",
      "Brand development",
      "Industry disruption analysis",
    ],
    carousel: 
    [
      2,3,  
    ],
  },
  {
    id: 2,
    name: "Health",
    bg: "./Health_1.jpg",
    p1: "Innobytes provide expert consulting services to healthcare organizations seeking to improve patient outcomes, reduce costs, and increase revenue.",
    p2: "Our team of experienced consultants has a proven track record of success in the healthcare industry, and we offer a range of services to help our clients achieve their goals.",
    p3: "InnoBytes work closely with our clients to understand their unique needs and develop customized solutions that deliver measurable results.",
    whatwedo: [
      "Strategic planning",
      "Process improvement",
      "Operational efficiency",
      "Regulatory compliance",
    ],
    carousel: 
    [
      4,5,  
    ],
  },
  {
    id: 3,
    name: "Life Sciences",
    bg: "./Life Sciences_1.jpg",
    p1: "The field of life science is constantly evolving, with new discoveries and advancements being made all the time. As a result, it's important for companies and organizations to stay up-to-date on the latest developments in the field, and to have access to expert advice and guidance.",
    p2: "This is where life science consulting comes in. Life science consulting firms specialize in providing advice and support to companies and organizations in the life science industry. This can include everything from strategic planning and market analysis, to regulatory compliance and product development.",
    p3: "Overall, life science consulting is an essential service for companies and organizations in the life science industry. With expert advice and guidance, companies can navigate the complex and rapidly evolving landscape of the industry, and stay ahead of the curve in terms of innovation, regulatory compliance, and market analysis.", 
    whatwedo: [
      "Rapidly Changing Landscape",
      "Regulatory Compliance",
      "Product Development",
      "Market Analysis",
    ],
    carousel: 
    [
      5,6,  
    ],
  },
  {
    id: 4,
    name: "Software and platforms",
    bg: "./Software and platforms_1.jpg",
    p1: "Our consulting firm provides expert software and platform consulting services to help companies optimize their technology solutions and drive business growth.",
    p2: "Overview of the Software and Platforms Industry The software and platforms industry is a rapidly evolving landscape, with new technologies and platforms emerging at an unprecedented pace. Our team of software and platform experts stays up-to-date on the latest trends, challenges, and opportunities in the industry to provide our clients with cutting-edge solutions.",
    p3: "Our satisfied software and platform clients have provided us with testimonials that highlight our expertise, responsiveness, and ability to deliver results in the software and platforms industry. You can read their feedback on our Software and Platforms page. Contact us today to learn more about our software and platform consulting services and how we can help your company optimize its technology solutions.",
    whatwedo: [
      "Software development",
      "Platform implementation",
      "Data analysis",
      "Project management",
    ],
    carousel: 
    [
      7,8,  
    ],
  },
  {
    id: 5,
    name: "Banking",
    bg: "./Banking_1.jpg",
    p1: "Welcome to our Banking and Capital Markets page! Our team of expert consultants has a deep understanding of the banking and capital markets industry, from traditional retail and commercial banking to investment banking, asset management, and more.",
    p2: "The banking and capital markets industry is facing significant challenges, including changing customer demands, increasing regulatory requirements, and emerging technologies.",
    p3: "Whether you're a retail or commercial bank, investment bank, asset manager, or other type of financial institution, our consulting firm can help you achieve your goals and thrive in a rapidly changing marketplace.",
    whatwedo: [
      "Strategy and business planning",
      "Risk management",
      "Digital transformation",
      "Operational excellence",
    ],
    carousel: 
    [
      9,10,  
    ],
  },
  {
    id: 6,
    name: "Consumer Goods and Services",
    bg: "./Consumer Goods and Services_1.jpg",
    p1: "The consumer products industry is highly competitive, with changing consumer preferences and evolving market trends.",
    p2: "At our consulting firm, we work with our clients to help them stay ahead of the curve and succeed in a rapidly changing market.",
    p3: "Whether you're a food and beverage manufacturer, personal care company, or household goods manufacturer, our consulting firm can help you achieve your business goals and succeed in a highly competitive marketplace.",
    whatwedo: [
      "Market research",
      "Brand strategy",
      "Supply chain management",
      "Sales and marketing",
    ],
    carousel: 
    [
      11,12,  
    ],
  },
  {
    id: 7,
    name: "High Tech",
    bg: "./High Tech_1.jpg",
    p1: "Welcome to our High Tech page! Our team of expert consultants has extensive experience working with high-tech companies, from software and hardware manufacturers to telecommunications and electronics companies.",
    p2: "The high-tech industry is constantly evolving, with new technologies and innovations emerging at a rapid pace. At our consulting firm, we work with our clients to help them navigate this fast-paced industry and stay ahead of the competition.",
    p3: "Whether you're a software or hardware manufacturer, telecommunications company, or electronics company, our consulting firm can help you achieve your business goals and stay ahead of the competition in a rapidly changing industry.",
    whatwedo: [
      "Strategy and innovation",
      "Product development",
      "Digital transformation",
      "Supply chain management",
    ],
    carousel: 
    [
      13,14,  
    ],
  },
  {
    id: 8,
    name: "Natural Resources",
    bg: "./Natural Resources_1.jpg",
    p1: "Our team of experienced consultants provides expert consulting services to natural resource companies seeking to improve sustainability, reduce risk, and increase profitability.",
    p2: "We offer a range of services to help natural resource companies navigate the complex landscape of sustainability and environmental management, including sustainability planning, environmental risk management, operational efficiency, and supply chain management.",
    p3: "We stay on top of the latest trends and developments in the natural resources industry, and we share our insights through original research, whitepapers, and blog posts.Contact us today to learn more about our natural resources consulting services and how we can help your company achieve its sustainability goals.",
    whatwedo: [
      "Sustainability planning",
      "Environmental risk management",
      "Operational efficiency",
      "Supply chain management",
    ],
    carousel: 
    [
      15,16,  
    ],
  },
  {
    id: 9,
    name: "Travel",
    bg: "./Travel_1.jpg",
    p1: "At our consulting firm, we provide strategic consulting services for companies in the travel industry. Our team of travel experts has deep industry knowledge and can help your company navigate the challenges and opportunities in this rapidly evolving landscape. The travel industry is a complex ecosystem that includes airlines, hotels, online travel agencies, cruise lines, and more. Our team stays up-to-date on the latest trends and developments in the industry to provide our clients with the insights and solutions they need to succeed.",
    p2: "Our satisfied travel clients have provided us with testimonials that highlight our expertise, responsiveness, and ability to deliver results in the travel industry. You can read their feedback on our Travel page.",
    p3: "Contact us today to learn more about our travel consulting services and how we can help your company succeed in this dynamic industry.",
    whatwedo: [
      "Revenue management",
      "Marketing and branding",
      "Operational efficiency",
      "Digital transformation",
    ],
    carousel: 
    [
      17,18,  
    ],
  },
  {
    id: 10,
    name: "Capital Markets",
    bg: "./Capital Markets_1.jpg",
    p1: "We provide strategic communications and media consulting services to help our clients build brand awareness, engage audiences, and navigate industry disruptions. Our team of experienced consultants has a deep understanding of the communications and media landscape and can develop customized solutions to meet your business goals.",
    p2: "We stay up-to-date on the latest trends and developments in the communications and media industry and share our insights through original research, whitepapers, and blog posts.",
    p3: "We stay up-to-date on the latest trends and developments in the communications and media industry and share our insights through original research, whitepapers, and blog posts.",
    whatwedo: [
      "Content strategy",
      "Crisis communications",
      "Brand development",
      "Industry disruption analysis",
    ],
    carousel: 
    [
      18,19,  
    ],
  },
  {
    id: 11,
    name: "Energy",
    bg: "./Energy_1.jpg",
    p1: "Welcome to our High Tech page! Our team of expert consultants has extensive experience working with high-tech companies, from software and hardware manufacturers to telecommunications and electronics companies.",
    p2: "The high-tech industry is constantly evolving, with new technologies and innovations emerging at a rapid pace. At our consulting firm, we work with our clients to help them navigate this fast-paced industry and stay ahead of the competition.",
    p3: "Whether you're a software or hardware manufacturer, telecommunications company, or electronics company, our consulting firm can help you achieve your business goals and stay ahead of the competition in a rapidly changing industry.",
    whatwedo: [
      "Strategy and innovatio",
      "Product development",
      "Digital transformation",
      "Supply chain management",
    ],
    carousel: 
    [
      20,21,  
    ],
  },
  {
    id: 12,
    name: "Industrial Equipment",
    bg: "./Industrial Equipment_1.jpg",
    p1: "Our Industrial Equipment consulting practice provides strategic advice and innovative solutions to companies in the manufacturing and heavy equipment industries. We have a team of experienced consultants who specialize in machinery and equipment, and who help clients navigate the rapidly changing landscape of the industrial equipment market.",
    p2: "The industrial equipment sector includes a variety of sub-industries, including manufacturing, construction, mining, agriculture, and transportation. This sector produces a wide range of machinery and equipment, including heavy machinery, engines, pumps, valves, and automation systems.",
    p3: "Our satisfied clients have provided us with testimonials that highlight our expertise, responsiveness, and ability to deliver results in the industrial equipment sector. You can read their feedback on our Industrial Equipment page. Contact us today to learn more about our Industrial Equipment consulting services and how we can help you navigate the rapidly changing industrial equipment market and achieve your strategic goals.",
    whatwedo: [
      "Strategic planning",
      "Operations optimization",
      "Supply chain management",
      "Quality management",
    ],
    carousel: 
    [
      22,23,  
    ],
  },
  {
    id: 13,
    
    name: "Public Service",
    bg: "./Public Service_1.jpg",
    p1: "Our Public Service consulting practice provides strategic advice and innovative solutions to government agencies and non-profit organizations around the world. We have a team of experienced consultants who specialize in public policy, social welfare, education, and healthcare, and who help clients navigate complex challenges and deliver impactful results.",
    p2: "The public service sector includes government agencies and non-profit organizations that provide essential services and support to communities and individuals. These services include healthcare, education, social welfare, public safety, and environmental protection.",
    p3: "Our satisfied clients have provided us with testimonials that highlight our expertise, responsiveness, and ability to deliver results in the public service sector. You can read their feedback on our Public Service page. Contact us today to learn more about our Public Service consulting services and how we can help you navigate complex challenges and deliver impactful results for your constituents.",
    whatwedo: [
      "Public policy analysis and development:",
      "Program design and implementation:",
      "Organizational effectiveness: ",
      "Performance management:",
    ],
    carousel: 
    [
      24,25,  
    ],
  },
  {
    id: 14,
    name: "Utilities",
    bg: "./Utilities_1.jpg",
    p1: "Our Utilities consulting practice provides tailored solutions to help utilities companies optimize operations, reduce costs, and drive innovation. We work with clients across the energy, water, and waste management sectors, providing strategic advice and practical support to help them achieve their goals.",
    p2: "The utilities sector includes companies that provide essential services to households, businesses, and governments. These services include the generation and distribution of energy, the treatment and distribution of water, and the management of waste.",
    p3: "Our satisfied clients have provided us with testimonials that demonstrate our expertise, professionalism, and ability to deliver results. You can read their feedback on our Utilities page. Contact us today to learn more about our Utilities consulting services and how we can help your company overcome challenges and achieve its strategic objectives.",
    whatwedo: [
      "Strategy development",
      "Regulatory compliance",
      "Operational optimization",
      "Innovation and technology",
    ],
    carousel: 
    [
      26,27,  
    ],
  },
  {
    id: 15,
    name: "Chemicals",
    bg: "./Chemicals_1.jpg",
    p1: "Our Chemicals consulting practice provides strategic and operational support to companies across the chemicals value chain, from raw materials and intermediates to specialty chemicals and end products. We help our clients optimize their operations, reduce costs, and drive growth through innovative solutions and industry expertise.",
    p2: "The chemicals sector is a complex and diverse industry that includes the production and sale of a wide range of chemical products. These products are used in a variety of applications, from basic materials to high-tech applications, and can be found in products we use every day, such as plastics, textiles, and pharmaceuticals.",
    p3: "Our Chemicals consulting practice has a proven track record of helping clients achieve their strategic objectives. Our case studies showcase our expertise in the chemicals industry and demonstrate the results we have achieved for our clients.",
    whatwedo: [
      "Supply chain optimization",
      "Innovation and technology",
      "Operations improvement",
      "Mergers and acquisitions",
    ],
    carousel: 
    [
      28,29,  
    ],
  },
  {
    id: 16,
    name: "Freight and Logistics",
    bg: "./Freight and Logistics_1.jpg",
    p1: "Our Freight and Logistics consulting practice helps clients in the transportation and logistics industry improve their operations, reduce costs, and increase efficiency. With our years of experience and industry expertise, we are committed to helping our clients achieve their goals and drive success.",
    p2: "The freight and logistics industry plays a critical role in the global economy, facilitating the movement of goods and products across borders and between regions. This industry includes transportation providers, logistics companies, warehouses, and distribution centers.",
    p3: "Our satisfied clients have provided us with testimonials that demonstrate our expertise, professionalism, and ability to deliver results. You can read their feedback on our Freight and Logistics page. Contact us today to learn more about our Freight and Logistics consulting services and how we can help your transportation or logistics company improve its operations and achieve its strategic objectives.",
    whatwedo: [
      "Supply chain optimization",
      "Logistics strategy",
      "Network design",
      "Technology and innovation",
    ],
    carousel: 
    [
      30,31,  
    ],
  },
  {
    id: 17,
    name: "Insurance",
    bg: "./Insurance_1.jpg",
    p1: "Our Insurance consulting practice provides strategic and operational guidance to insurance companies, helping them navigate the complex and rapidly evolving industry landscape. With deep industry expertise and a focus on innovation and customer-centricity, we help our clients drive growth, improve efficiency, and enhance customer experiences. The insurance industry is a critical component of the global financial services industry, providing protection and risk management to individuals and businesses. Insurance companies offer a wide range of products, including life insurance, health insurance, property and casualty insurance, and more.",
    p2: "Our satisfied clients have provided us with testimonials that demonstrate our expertise, professionalism, and ability to deliver results. You can read their feedback on our Insurance page.",
    p3: "Contact us today to learn more about our Insurance consulting services and how we can help your insurance company achieve its strategic objectives and navigate the challenges of the rapidly evolving insurance industry.",
    whatwedo: [
      "Strategy development",
      "Product development",
      "Customer experience",
      "Risk management",
    ],
    carousel: 
    [
      32,33,  
    ],
  },
  {
    id: 18,
    name: "Retail",
    bg: "./Retail_1.jpg",
    p1: "Our Retail consulting practice helps retailers stay ahead of the competition and adapt to the rapidly changing retail landscape. Our team of experts offers strategic and operational guidance to retailers of all sizes, from global leaders to emerging players. The retail industry is a dynamic and complex sector that encompasses a wide range of businesses, from brick-and-mortar stores to online retailers. Retailers face numerous challenges, including changing consumer preferences, increased competition, and evolving technologies.",
    p2: "Our satisfied clients have provided us with testimonials that demonstrate our expertise, professionalism, and ability to deliver results. You can read their feedback on our Retail page.",
    p3: "Contact us today to learn more about our Retail consulting services and how we can help your retail business stay ahead of the competition and succeed in the rapidly evolving retail landscape.",
    whatwedo: [
      "Strategy development",
      "Customer experience",
      "Operational improvement",
      "Merchandising and pricing",
    ],
    carousel: 
    [
      34,35,  
    ],
  },
];
