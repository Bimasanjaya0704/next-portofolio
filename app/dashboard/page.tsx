"use client";
import { useEffect, useState } from "react";
import { getBlogs, getPortfolio, getContactMessege } from "@/utils/api";
import { Blog, Portfolio, Contact } from "@/lib/types/interface";
import { LoadingIcon } from "@/components/loading-icon";

export default function DashboardPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  const [contactMessages, setContactMessages] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const blogsData = await getBlogs();
        const portfolioData = await getPortfolio();
        const contactData = await getContactMessege();

        setBlogs(blogsData.data);
        setPortfolio(portfolioData.data);
        setContactMessages(contactData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <LoadingIcon />;
  }

  const Card = ({ title, count }: { title: string; count: number }) => {
    return (
      <div className="w-full bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-second">{title}</h3>
        <p className="text-[50px] font-bold text-accent">{count}</p>
      </div>
    );
  };

  return (
    <div className="mb-4 w-full flex gap-4">
      {/* Total Blogs Card */}
      <Card title="Blogs" count={blogs.length} />

      {/* Total Portfolio Card */}
      <Card title="Portfolio" count={portfolio.length} />

      {/* Total Contact Messages Card */}
      <Card title="Messages" count={contactMessages.length} />
    </div>
  );
}
