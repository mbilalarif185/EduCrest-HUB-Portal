export const replies: { trigger: string[]; response: string }[] = [
  {
    trigger: ["hi", "hello", "hey"],
    response: "Hello!  How can I help you today?",
  },
  {
    trigger: ["course", "courses", "course list"],
    response: "Here are our available courses:\n1️⃣ Web Development\n2️⃣ Data Science\n3️⃣ Digital Marketing\nReply with the course number to know details!",
  },
  {
    trigger: ["1", "web development"],
    response: "Web Development Course covers HTML, CSS, JS, React, Node.js. Duration: 3 months. Fee: $199",
  },
  {
    trigger: ["2", "data science"],
    response: "Data Science Course covers Python, Pandas, Machine Learning. Duration: 4 months. Fee: $299",
  },
  {
    trigger: ["3", "digital marketing"],
    response: "Digital Marketing Course covers SEO, Google Ads, SMM. Duration: 2 months. Fee: $149",
  }
];
