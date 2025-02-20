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
      <div className="container md:mb-24 2xl:px-16">
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex gap-4 items-center">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-3xl lg:text-6xl 2xl:text-[90px] font-extrabold dark:text-white dark:text-opacity-80"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-primary/80 dark:text-white/80 text-xs md:text-base 2xl:text-lg`}
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
