// src/components/MainContent.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import intro_image from "@/assets/images/maincontent/kanban-introduction-image.jpg";
import principles_image from "@/assets/images/maincontent/kanban-principles-image.jpg";
import benefits_image from "@/assets/images/maincontent/kanban-benefits-image.jpg";
import practice_image from "@/assets/images/maincontent/kanban-in-practice-image.jpg";
import features_image from "@/assets/images/maincontent/ikanb-features-image.jpg";
import getting_started_image from "@/assets/images/maincontent/getting-started-with-ikanb-image.jpg";

const topics = [
  {
    title: "Introduction to Kanban",
    description:
      "Discover the origins of Kanban in the Toyota Production System, and how its principles of visualizing work, limiting work in progress, and focusing on flow can transform project management in any industry.",
    imageUrl: intro_image, // Replace with actual image path
  },
  {
    title: "Kanban Principles",
    description:
      "Learn about the four core principles of Kanban: Visualize Work, Limit Work in Progress, Manage Flow, and Continuous Improvement. These principles guide teams to work more efficiently and adapt quickly to changes.",
    imageUrl: principles_image, // Replace with actual image path
  },
  {
    title: "Benefits of Kanban",
    description:
      "From increased productivity to enhanced team collaboration, discover how implementing Kanban can lead to significant improvements in project management and team dynamics.",
    imageUrl: benefits_image, // Replace with actual image path
  },
  {
    title: "Kanban in Practice",
    description:
      "Explore how Kanban is applied in various sectors beyond manufacturing, such as software development, marketing, and human resources, to streamline workflows and enhance project visibility.",
    imageUrl: practice_image, // Replace with actual image path
  },
  {
    title: "How iKanB Empowers Kanban Users",
    description:
      "iKanB brings the power of Kanban to your fingertips with features like customizable boards, real-time collaboration, and insightful analytics, making it easier than ever to manage your projects and boost team productivity.",
    imageUrl: features_image, // Replace with actual image path
  },
  {
    title: "Getting Started with Kanban and iKanB",
    description:
      "Ready to dive into Kanban? See how iKanB simplifies the process of setting up your first board, inviting team members, and tracking your projects for a seamless project management experience.",
    imageUrl: getting_started_image, // Replace with actual image path
  },
];

const MainContent = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="lg:w-1/2 md:w-2/3 sm:w-full text-center my-4">
        <h1 className="text-4xl font-bold">Welcome to iKanB</h1>
        <p className="text-lg text-center my-4">
          iKanB is a powerful project management tool that leverages the Kanban
          method to help teams visualize work, optimize processes, and deliver
          projects efficiently. Explore the resources below to learn more about
          Kanban and how iKanB can transform your project management experience.
        </p>
      </div>
      <div className="flex flex-wrap lg:w-1/2 md:w-2/3 sm:w-full justify-center items-stretch m-2">
        {topics.map(({ title, description, imageUrl }, index) => (
          <Card
            key={index}
            className="flex flex-col items-center m-3 w-96 dark:bg-zinc-900 dark:hover:bg-zinc-900/80  bg-zinc-100 hover:bg-zinc-100/50 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={imageUrl}
              alt={title}
              className=" w-48 h-48 my-2 object-cover rounded-full"
            />
            <CardHeader>
              <CardTitle className="text-center">{title}</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p className=" text-justify">{description}</p>
            </CardContent>
            {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
          </Card>
        ))}
      </div>
      <div className="flex flex-col items-center my-4 w-full">
        <h2 className="text-3xl font-bold">Sign up for iKanB</h2>

        <div className="flex w-full max-w-sm items-center space-x-2 my-4">
          <Input type="email" placeholder="Email" className="w-full" />
          <Button type="submit">Sign Up!</Button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
