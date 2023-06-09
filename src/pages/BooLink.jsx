import Button from '../components/Button';
import Link from '../components/Link';
import { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';
import { useIsScrolled } from '../hooks/useIsScrolled';

function BooLink() {
    let myRef = useRef();
    let isVisible = useIsVisible(myRef);

    const scrollTop = useIsScrolled();

    return (
        <div className="work">
            <div className="work__topbar work__topbar--mobile"></div>
            <div className="work__content">
                <Link to="/" section="works">
                    <div className={`close ${scrollTop && 'close--fixed'}`}>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Close">
                                <path
                                    id="Vector"
                                    d="M28 2L2 28"
                                    stroke="white"
                                    stroke-miterlimit="10"
                                    stroke-linecap="square"
                                />
                                <path
                                    id="Vector_2"
                                    d="M28 28L2 2"
                                    stroke="white"
                                    stroke-miterlimit="10"
                                    stroke-linecap="square"
                                />
                            </g>
                        </svg>
                    </div>
                </Link>
                <div className="work__header">
                    <h1>Boo.link</h1>
                    <div className="tags">
                        <Button tag="UI/UX" primary />
                        <Button tag="Collaborations" primary />
                        <Button tag="Case Study" primary />
                    </div>
                    <div className="link">
                        <img src="assets/link.svg" alt="link" />
                        <a href="https://boo.link">boo.link</a>
                    </div>
                </div>
                <div className="work__overview">
                    <div className="description">
                        <div>
                            <div className="work__box work__box--primary">Challenge</div>
                            <p>
                                Re-design the boo.link website and create a set of backgrounds for
                                their templates. Enhance the overall visual appeal of the website
                                and provide a range of attractive backgrounds that would complement
                                the templates.
                            </p>
                            <ul>
                                <li>Product vision</li>
                                <li>UI Design</li>
                                <li>Designed website for desktop and mobile</li>
                            </ul>
                        </div>
                        <div>
                            <div className="work__box work__box--secondary">Goal</div>
                            <p>
                                The primary goal of the project was to revamp the boo.link website
                                and improve its aesthetics. The aim was to create a visually
                                appealing and user-friendly interface that would attract and engage
                                users. Additionally, the goal was to develop a collection of
                                backgrounds that would enhance the visual impact of the templates
                                offered on the website.
                            </p>
                        </div>
                    </div>
                    <div className="images">
                        <div
                            ref={myRef}
                            style={{ transform: `translateY(${isVisible && scrollTop}px)` }}
                        >
                            <img
                                className="images__img images__img--first"
                                src="assets/boolink/boo-link-left.png"
                                alt="smartphone_left"
                            />
                        </div>
                        <div style={{ transform: `translateY(-${isVisible && scrollTop}px)` }}>
                            <img
                                className="images__img images__img--second"
                                src="assets/boolink/boo-link-right.png"
                                alt="smartphone_right"
                            />
                        </div>
                    </div>
                </div>
                <div className="work__design">
                    <div className="header">
                        <h1>My Desing Process</h1>
                        <p>
                            Understanding, the needs of the project, making a plan, creating a
                            design
                        </p>
                    </div>
                    <div className="slogans">
                        <div className="slogan">
                            <h2 className="slogan__circle">Discover</h2>
                            {/* <span className="slogan__underline">
                                <span></span>
                            </span> */}
                            <p>
                                The initial stage involved gathering information from the internet
                                and understanding the key ideas behind the boo.link website. The
                                team conducted research to grasp the desired aesthetic and target
                                audience. Insights were gathered to align the design with the
                                website's purpose.
                            </p>
                        </div>
                        <div className="slogan">
                            <h2 className="slogan__circle">Define</h2>
                            {/* <span className="slogan__underline slogan__underline--second">
                                <span></span>
                            </span> */}
                            <p>
                                Based on the gathered information, the team collaborated to define
                                the design direction for the website and the background set. Using
                                Figma, wireframes and mockups were created to visualize the proposed
                                changes and ensure a cohesive user experience.
                            </p>
                        </div>
                        <div className="slogan">
                            <h2 className="slogan__circle">Develop</h2>
                            {/* <span className="slogan__underline slogan__underline--third">
                                <span></span>
                            </span> */}
                            <p>
                                Using Figma for the website redesign and Adobe Illustrator for
                                creating the background set, the team executed the design vision.
                                The website was redesigned to incorporate the new visual elements,
                                such as updated typography, color schemes, and improved layout.
                                Simultaneously, the background set was designed to provide a diverse
                                range of appealing options for the templates.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="work__result">
                    <div className="work__box work__box--primary">Result</div>
                    <p>
                        Throughout the design process, iterative feedback loops were conducted to
                        refine and improve the designs. The team ensured that the new visuals
                        aligned with the intended goals of the website and provided a cohesive and
                        visually engaging experience for the users. By following this design
                        process, the boo.link website was successfully redesigned, incorporating new
                        visual elements and offering an attractive set of backgrounds for their
                        templates.
                    </p>
                    <img
                        className="work__result--mobile"
                        src="assets/boolink/boo-link03-mobile.png"
                        alt="boolink-mobile"
                    />
                    <img
                        className="work__result--desktop"
                        src="assets/boolink/boo-link04-desktop.png"
                        alt="boolink-mobile"
                    />
                </div>
            </div>
        </div>
    );
}

export default BooLink;
