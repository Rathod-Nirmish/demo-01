import React from 'react';
import styles from './LeadershipTeam.module.css';

const teamMembers = [
  // { name: 'Anand Patel', role: 'Manager', imgSrc: './anand-patel.png' },
  { name: 'Modesto', role: 'Designer', imgSrc: './modesto.png' },
  { name: 'Harish Pankhania', role: 'Founder', imgSrc: './harish-pankhania.png' },
  { name: 'Nattasha', role: 'Designer', imgSrc: './nattasha.png' },
  { name: 'Divya Patel', role: 'Developer', imgSrc: './divya-patel.png' },
];

const LeadershipTeam = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Meet The Leadership <span className={styles.highlight}>Team</span>
      </h2>
      <div className={styles.team}>
        {teamMembers.map(member => (
          <div key={member.name} className={styles.member}>
            <img src={member.imgSrc} alt={member.name} className={styles.photo} />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
