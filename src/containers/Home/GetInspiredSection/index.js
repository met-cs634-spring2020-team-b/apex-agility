import React from 'react';

import Carousel from '../../../components/Carousel';

import styles from './GetInspiredSection.module.css';

const slides = [{
    id: 0,
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/BarackObamaportrait.jpg/340px-BarackObamaportrait.jpg','https://pngimage.net/wp-content/uploads/2018/06/steve-jobs-png-3.png','https://pngimage.net/wp-content/uploads/2018/05/angela-merkel-png-5.png'],
    reviews: ['This was the stepping stone to a new career and my "Plan B".', 'Getting started was as easy as taking a picture on a phone!', 'Alles hat ein Ende, nur die Wurst hat zwei.'],
    reviewers: ['Barack O.', 'Steve J.', 'Angela M.'],
  },
  {
    id: 1,
    images: ['https://lh3.googleusercontent.com/proxy/hDD2_KJxrFxq3G_Ea5V7FEJAuZaqaTChPT8NyZL0M7nsf1wK330EIJ3TnQhz25vJjEJfscoHAdwmiRDl9KE-EW8CsXX50A', 'https://www.bu.edu/eng/files/2016/05/ECE.faculty.profile.pictures.giles_.jpg', 'https://www.bu.edu/eng/files/2018/06/Kopell-Nancy-BU-BME.jpg'],
    reviews: ['I learned success doesn\'t just find you.  You have to go out and get it.', 'The best thing I ever did for myself.', 'The harder you work for something, the greater you\'ll feel when you achieve it.'],
    reviewers: ['Mark Grinstaff, Professor, Boston University', 'Rosco Giles, Ph.D., Boston University', 'Nancy Kopell, Ph.D., Boston University College of Engineering'],
}];

const GetInspiredSection = () => {
  return (
    <section className={styles.get_inspired_section}>
      <h3>Get Inspired</h3>
      <Carousel banner={false} slides={slides} />
    </section>
  )
};

export default GetInspiredSection;
