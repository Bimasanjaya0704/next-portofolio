"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of experience",
  },
  {
    num: 11,
    text: "Projects completed",
  },
  {
    num: 5,
    text: "Programming Languages",
  },
  {
    num: 209,
    text: "Code commits",
  },
];
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto md:mb-24">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center lg:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl lg:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-primary/80 dark:text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
