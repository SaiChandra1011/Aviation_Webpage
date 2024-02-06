import React from 'react';
import Boeing from './boeing.jsx';
import boeinginformation from '../boeinginfo.jsx';
import Airbus from './airbus.jsx';
import airbusinformation from '../airbusinfo.jsx';
import AmericanJets from './americanfighters.jsx';
import americanjetinformation from '../americaninfo.jsx';
import RussianJets from './russianfighters.jsx';
import russianjetinformation from '../russianinfo.jsx';

function Into() {
  return (
    <>
      <div className="Intropara">
        <h2>Aviation,</h2>

        <p className="para">
          <div className="aiimg">
            <img
              src={require('../images/747-img.jpeg')}
              alt="Plane-img"
              height={350}
              width={350}
              style={{ float: 'left' }}
            />
          </div>
          an awe-inspiring realm of human achievement, embodies the soaring
          triumphs of flight that have revolutionized global connectivity. The
          history of aviation traces back to the dreams and innovations of
          pioneers like the Wright brothers, whose groundbreaking 1903 flight
          marked the dawn of modern aviation. From propeller-driven marvels to
          the advent of commercial jets in the mid-20th century, such as the
          Boeing 707, aviation swiftly evolved, shaping the way people traverse
          continents. In tandem, the thunderous prowess of fighter jets emerged,
          embodying cutting-edge technology and unparalleled speed. These sleek
          aerial guardians, exemplified by iconic aircraft like the F-16
          Fighting Falcon, symbolize the pinnacle of aviation prowess, blending
          power, agility, and tactical excellence.
          <br />
          <br />
          The Boeing 747, introduced in 1969, stands tall as an aviation legend,
          renowned for its distinctive humpback design and remarkable size. It
          redefined air travel by accommodating a large number of passengers and
          revolutionizing long-haul flights. Similarly, the Airbus A380,
          unveiled in 2005, remains the largest commercial airliner ever built,
          boasting luxurious amenities and unparalleled comfort for passengers.
          Its double-deck design set new standards in aviation, showcasing
          advanced engineering and fuel efficiency despite its colossal size.
          <br />
          <br />
          Beyond these giants, the Concorde supersonic airliner deserves a
          spotlight. This marvel of engineering soared at twice the speed of
          sound, offering unprecedented transatlantic travel at unparalleled
          velocity. Though retired, the Concorde remains a testament to
          mankind's pursuit of pushing the boundaries of speed and innovation in
          aviation.
        </p>
        <p className="para">
          <div className="aiimg">
            <img
              src={require('../images/2nd ai image.jpeg')}
              alt="Plane-img"
              height={350}
              width={350}
              style={{ float: 'right' }}
            />
          </div>
          Embark on an exhilarating journey through the skies as we unveil the
          rich history of fighter jets, from classic legends to the latest in
          modern aviation. Explore the daring tales of World War I and II, where
          planes like the agile Spitfire and robust Thunderbolt played pivotal
          roles. Witness the evolution of technology and design as we transition
          to the present, introducing you to the high-speed maneuvers of the
          F-22 Raptor and the versatile capabilities of the F-35 Lightning II.
          Immerse yourself in the world of aviation, where each page unlocks the
          secrets behind these incredible flying machines, showcasing the
          courage, innovation, and engineering marvels that have shaped the
          course of aerial warfare. Whether you're an aviation enthusiast or a
          curious mind, this encyclopedia is your comprehensive guide to the
          dynamic world above. Buckle up as we soar through time and witness the
          awe-inspiring legacy of fighter jets.
          <br />
          <br />
          From the nimble biplanes of World War I to the iconic warbirds of
          World War II, such as the Spitfire, Mustang, and Thunderbolt, each
          aircraft tells a unique story of courage and engineering prowess.
          These vintage marvels, with their distinctive silhouettes and roaring
          engines, played pivotal roles in shaping the course of warfare and
          capturing the imagination of generations.
          <br />
          <br />
          Dive into AviaPedia as it takes flight into the vast skies of aviation
          exploration from commercial jets to fighter jets.
        </p>
      </div>
      {boeinginformation.map((boeingItem) => (
        <Boeing
          key={boeingItem.key}
          title={boeingItem.title}
          pictureURL={boeingItem.pictureURL}
          content={boeingItem.content}
        />
      ))}

      {airbusinformation.map((airbusItem) => (
        <Airbus
          key={airbusItem.key}
          title={airbusItem.title}
          pictureURL={airbusItem.pictureURL}
          content={airbusItem.content}
        />
      ))}

      {americanjetinformation.map((americanjetItem) => (
        <AmericanJets
          key={americanjetItem.key}
          title={americanjetItem.title}
          pictureURL={americanjetItem.pictureURL}
          content={americanjetItem.content}
        />
      ))}

      {russianjetinformation.map((russianjetItem) => (
        <RussianJets
          key={russianjetItem.key}
          title={russianjetItem.title}
          pictureURL={russianjetItem.pictureURL}
          content={russianjetItem.content}
        />
      ))}
    </>
  );
}

export default Into;
