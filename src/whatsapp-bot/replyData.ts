export const replies: { trigger: string[]; response: string }[] = [
  {
    trigger: ["hi", "hello", "hey"],
    response: "Hello!  How can I help you today?",
  },
  {
    trigger: ["course", "courses", "course list"],
    response:
      "Here are our available courses:\n1️⃣ Web Development\n2️⃣ Data Science\n3️⃣ Digital Marketing\n\nReply with the course number to know details!",
  },
  {
    trigger: ["1", "web development"],
    response:
      "Web Development Course:\n📘 HTML, CSS, JS, React, Node.js\n⏳ Duration: 3 months\n💰 Fee: $199",
  },
  {
    trigger: ["2", "data science"],
    response:
      "Data Science Course:\n🐍 Python, Pandas, Machine Learning\n⏳ Duration: 4 months\n💰 Fee: $299",
  },
  {
    trigger: ["3", "digital marketing"],
    response:
      "Digital Marketing Course:\n🔍 SEO, Google Ads, SMM\n⏳ Duration: 2 months\n💰 Fee: $149",
  }

];
