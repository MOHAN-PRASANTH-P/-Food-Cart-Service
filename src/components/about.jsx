import React from "react";
import aboutImage from "../assets/about-page.png";
import portraitImage from "../assets/portrait.png";
import groupImage from "../assets/groupImage.jpg";
import "./About.css"; 

export const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to <strong>Dindigul Thalappakatti</strong>! We are passionate about serving
            authentic South Indian flavors directly to your's.
          </p>
          <p>
            Our mission is to bring delicious meals and refreshing beverages
            to every customer, ensuring quality, freshness, and prompt delivery.
          </p>
          <p>
            From Biryani to Veg Meals, we carefully craft each dish with love
            and traditional recipes.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Delicious food" />
        </div>
      </div>
        <div className="about-portrait">
          <img src={portraitImage} alt="Founder" />
        </div>
        <div className="about-container">
      <div className="about-main">
        <div className="about-texts">
          <p>
            The unswerving nature and mouthwatering taste of Thalappakatti Biriyani can be attributed to the fact that all the ingredients were prepared by Thalappakatti Naidu, himself and took great care in doing so. He also prepared a palatable dish know as “Dalcha” (a useful combination dish with Biriyani) by making use of mutton bones and adding vegetables like brinjals, potato, thoor and dhal to it. Despite its roots going back 50 years, his cookery style and secrets passed down to his family members are followed strictly meticulously and thereby have ensured that the “Thalappakatti Biriyani” taste remains unchanged.</p>

          <p>High quality and taste are of prime importance, and because of this our brand of Biriyani and other food products have attained widespread popularity all across South India. There are numerous articles published in different journals about our Biriyani and other food products. As a result of our efforts, the word “Thalappakatti” for a common man in South India today refers to High Quality Biriyani.</p>

          <p>Politicians, former Chief Ministers of South India and South Indian cinema legends have all experienced the flavour of Thalappakatti Biriyani. The Great South Indian cinema Legend Sivaji Ganesan who on visiting his farm house at soorakottai would always stop at Dindigul Thalappakatti Biriyani without fail.</p>

          <p>Thalappakatti Biriyani has been delighting people from the rich to the poor for the last 50 years and the journey goes on!!!
          </p>
        </div>
      </div>

      <div className="about-bottom">
        <div className="about-bottom-text">
          <p>Started as a Betel nut shop, Mr. Nagasamy Naidu took the chance of opening a small 4-seater hotel which made him realise that his wife’s unique style of biriyani had potential to go places. Started by serving his locality, the biriyani brought in many fans from the neighbouring cities. A special blend of spices is used for the biryani. A type of short grain seeraga samba rice, called Parakkum Sittu and Kannivadi meat which comes from tender grass-fed goats makes the taste distinct. This rice, unlike basmati has no taste of its own, so it completely absorbs the flavours of the spices.
          </p>
          <p>
            Our restaurant, Dindigul Thalappakatti offers a sophisticated dining experience for those seeking to explore beyond the ordinary and discover the full potential of south-indian dining experience.
          </p>
          <p>
            Promising an elite experience, each table will have a designated ‘captain’ that provides personalised service to the regal guests. We have carefully handpicked the staff from all over India and have been given special training.
          </p>
        </div>
        <div className="about-group">
          <img src={groupImage} alt="Team" />
        </div>
      </div>
    </div>
    </div>
  );
};
