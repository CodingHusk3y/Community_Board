// App.js
import React from 'react';
import './App.css';
import ResourceCard from './components/ResourceCard';

const resources = [
  { id: 1, title: 'A list of Summer 2024 internships', description: 'Summer 2024 Tech Internships by Pitt CSC & Simplify', link: 'https://github.com/SimplifyJobs/Summer2024-Internships' },
  { id: 2, title: 'Zero to Offer', description: 'A series dedicated to accelerating your tech career.', link: 'https://pittcs.wiki/zero-to-offer/' },
  { id: 3, title: 'Simplify', description: 'Application tool, fill out application forms with one click', link: 'https://simplify.jobs/?utm_source=GHList&utm_medium=banner' },
  { id: 4, title: 'CodePath', description: ' An organization that provides technical training, guidance and a community to help people start their careers in the tech industry', link: 'https://www.codepath.org/' },
  { id: 5, title: 'LeetCode', description: 'The best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.', link: 'https://leetcode.com/' },
  { id: 6, title: 'Coding Interview University', description: 'To-do list of study topics for becoming a software engineer', link: 'https://github.com/jwasham/coding-interview-university' },
  { id: 7, title: 'Tech Interview Handbook', description: 'Software Engineer interviews: Everything you need to prepare', link: 'https://www.techinterviewhandbook.org/software-engineering-interview-guide/' },
  { id: 8, title: 'Major League Hacking', description: 'The official collegiate hackathon league.', link: 'https://mlh.io/' },
  { id: 9, title: 'DevPost', description: 'Participate in online virtual and in-person hackathons to build products, practice skills, learn technologies, win prizes, and grow your network.', link: 'https://devpost.com/' },
  { id: 10, title: 'HackerRank', description: 'HackerRank is the market-leading coding test and interview solution for hiring developers. Start hiring at the pace of innovation!', link: 'https://www.hackerrank.com/' },
  { id: 11, title: 'LinkedIn', description: 'The World Most Popular Job Searching Website', link: 'https://www.linkedin.com' },
  { id: 12, title: 'r/csMajors', description: 'A reddit forum for CS majors, a lot of information, but be careful cuz people here can be really toxic', link: 'https://www.reddit.com/r/csMajors/' },
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Internship Prep Site</h1>
        <p>This website provides resources for students preparing for internships</p>
      </header>
      <main className='Body'>
        <div className="resource-grid">
          {resources.map(resource => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              link={resource.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
