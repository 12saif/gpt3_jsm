import React from "react";
import "./header.css";
import peopleGroup from "../../assets/Group 81.png";
import headerIllustration from "../../assets/Header Illustration.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={peopleGroup} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={headerIllustration} alt="AI" />
      </div>
    </div>
  )
}
      </div>
    </div>
  )
}
      </div>
    </div>
  )
}
        <div className="gpt__header-img">
          <img src={headerIllustration} alt="AI" />
        </div>
      </div>
    </div>
  );
};

export default Header;
