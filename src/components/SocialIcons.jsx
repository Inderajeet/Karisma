import React, { useState, useEffect } from "react";
import Booking from "./BookingForm";
import { fetchAllJson } from "../utils/fetchAllJson";


const SocialIcons = () => {
    const [showBooking, setShowBooking] = useState(false);

    const handleOpen = () => setShowBooking(true);
    const handleClose = () => setShowBooking(false);

    const [jsonData, setJsonData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllJson();
                setJsonData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return;
    }

    if (error) {
        return;
    }
    const { images } = jsonData;
    const { header } = images;
    return (
        <>
            <a
                onClick={handleOpen}
                className="mobile-book-now hoveranim"
                // data-bs-toggle="modal"
                // data-bs-target="#bookingModal" 
                style={{ backgroundColor: 'rgb(64, 93, 83)', color: 'white', border: '2px solid gray', cursor: 'pointer' }}
            >
                <div className="imgAlign" style={{ paddingBottom: '10px' }}>

                    <img src={header['appointmentBtn']} alt="Logo"  />
                </div>
                <span style={{
                    fontWeight: 'bold', transformOrigin: 'center',
                    marginLeft: '5px'
                }}>APPOINTMENT</span>

            </a>
            <div className="fixedRit ">
                <ul >
                    <li >
                        <a
                            onClick={handleOpen}
                            // href="/"
                            className="bookNow hoveranim"
                            // data-bs-toggle="modal"
                            // data-bs-target="#bookingModal" 
                            style={{ backgroundColor: 'rgb(64, 93, 83)', color: 'white', border: '2px solid gray', cursor: 'pointer' }}
                        >
                            <div className="" style={{ paddingBottom: '10px' }}>

                                <img src={header['appointmentBtn']} alt="Logo" style={{ height: '30px', width: '30.494px' }} />
                            </div>
                            <span style={{
                                fontWeight: 'bold', transform: 'rotate(180deg)', transformOrigin: 'center',
                                marginLeft: '5px'
                            }}>APPOINTMENT</span>

                        </a>
                    </li>
                    <li>
                        <a
                            href="https://api.whatsapp.com/send?phone=+971564223807&text=Help Me ?"
                            target="_blank"
                            id="whatsapp"
                            className="socialLink"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="align">
                                <svg
                                    id="Layer_2"
                                    data-name="Layer 2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={55}
                                    height={55}
                                    viewBox="0 0 68 68"
                                >
                                    <g id="_08.whatsapp" data-name="08.whatsapp">
                                        <circle id="background" cx={34} cy={34} r={34} fill="#405d53" />
                                        <g id="icon" transform="translate(15 15)">
                                            <path
                                                id="Path_10023"
                                                data-name="Path 10023"
                                                d="M67.914,43.135A17.307,17.307,0,0,0,40.186,63.159L38.35,72.074a.652.652,0,0,0,.106.519.666.666,0,0,0,.707.275l8.722-2.07A17.307,17.307,0,0,0,67.9,43.135ZM65.187,64.881a13.57,13.57,0,0,1-15.608,2.557l-1.221-.606L43,68.1V68.03l1.129-5.4-.6-1.175A13.55,13.55,0,0,1,65.187,45.72l.06.083a13.551,13.551,0,0,1-.069,19.088Z"
                                                transform="translate(-36.592 -37.276)"
                                                fill="#fff"
                                            />
                                            <path
                                                id="Path_10024"
                                                data-name="Path 10024"
                                                d="M71.257,68.753a4.527,4.527,0,0,1-2.4,2.09c-1.836.441-4.632,0-8.132-3.236l-.044-.04c-3.045-2.843-3.853-5.212-3.673-7.089a4.493,4.493,0,0,1,1.745-2.663,1,1,0,0,1,1.561.367l1.128,2.549a.992.992,0,0,1-.121,1.014l-.573.735a.973.973,0,0,0-.077,1.084,10.652,10.652,0,0,0,1.936,2.152,11.449,11.449,0,0,0,2.681,1.921.973.973,0,0,0,1.062-.224l.657-.668a1,1,0,0,1,1-.279l2.681.768a1.006,1.006,0,0,1,.566,1.521Z"
                                                transform="translate(-44.897 -46.194)"
                                                fill="#fff"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="tel:+97564223807"
                            target="_blank"
                            id="call"
                            className="socialLink"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="align">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={55}
                                    height={55}
                                    viewBox="0 0 68 68"
                                >
                                    <g id="chat" transform="translate(0.327 0.071)">
                                        <g
                                            id="Ellipse_89"
                                            data-name="Ellipse 89"
                                            transform="translate(-0.327 -0.071)"
                                            fill="#405d53"
                                            stroke="none"
                                            strokeWidth={0}
                                        >
                                            <circle cx={34} cy={34} r={34} stroke="none" />
                                            <circle cx={34} cy={34} r="33.5" fill="none" />
                                        </g>
                                        <path
                                            id="Path_10022"
                                            data-name="Path 10022"
                                            d="M166.512,150.708c-.28-.158-.6-.336-.979-.566-.213-.129-.481-.305-.766-.492-1.459-.958-2.564-1.636-3.5-1.636a1.711,1.711,0,0,0-.619.111,5.983,5.983,0,0,0-2.156,1.987,10.536,10.536,0,0,1-.791.924,15.567,15.567,0,0,1-7.562-7.57,10.458,10.458,0,0,1,.928-.8,5.993,5.993,0,0,0,1.981-2.15c.407-1.057-.339-2.32-1.524-4.127-.187-.284-.363-.553-.491-.765-.231-.384-.409-.7-.567-.981-.646-1.149-1.073-1.909-2.677-1.909-1.041,0-2.513.985-3.511,1.961a6.667,6.667,0,0,0-2.247,4.618c0,4.236,2.365,9.09,6.48,13.323.007.007.014.009.021.016,4.23,4.119,9.084,6.475,13.316,6.475h0a6.646,6.646,0,0,0,4.613-2.239c.977-1,1.962-2.46,1.962-3.5C168.419,151.782,167.66,151.355,166.512,150.708Z"
                                            transform="translate(-121.351 -111.806)"
                                            fill="#fff"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/damasmedicalcenter/"
                            target="_blank"
                            id="insta"
                            className="socialLink"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="align">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={55}
                                    height={55}
                                    viewBox="0 0 68 68"
                                >
                                    {/* <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.146"
                      y1="0.146"
                      x2="0.854"
                      y2="0.854"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset={0} stopColor="#fae100" />
                      <stop offset="0.15" stopColor="#fcb720" />
                      <stop offset="0.3" stopColor="#ff7950" />
                      <stop offset="0.5" stopColor="#ff1c74" />
                      <stop offset={1} stopColor="#6c1cd1" />
                    </linearGradient>
                  </defs> */}
                                    <g
                                        id="Layer_2"
                                        data-name="Layer 2"
                                        transform="translate(0.03 0.029)"

                                    >
                                        <g id="Circle" transform="translate(0.007 0)">
                                            <g
                                                id="_03.Instagram"
                                                data-name="03.Instagram"
                                                transform="translate(0 0)"

                                            >
                                                <rect
                                                    id="Background"
                                                    width={68}
                                                    height={68}
                                                    rx={34}
                                                    transform="translate(-0.038 -0.029)"
                                                    // fill="url(#linear-gradient)"
                                                    fill="#405d53"
                                                />
                                                <g id="Group_21885" data-name="Group 21885">
                                                    <path
                                                        id="Shade"
                                                        d="M59.86,11.683A121.751,121.751,0,0,1,39.042,39.047a121.913,121.913,0,0,1-27.351,20.8q-.858-.746-1.667-1.555A34.147,34.147,0,1,1,58.308,10q.8.814,1.551,1.684Z"
                                                        transform="translate(-0.016 0)"
                                                        // fill="#fff"
                                                        opacity="0.1"
                                                    />
                                                    <g id="Icon" transform="translate(16.169 16.176)">
                                                        <path
                                                            id="Path_11177"
                                                            data-name="Path 11177"
                                                            d="M62.061,36H45.885A9.885,9.885,0,0,0,36,45.885V62.061a9.885,9.885,0,0,0,9.885,9.885H62.061a9.885,9.885,0,0,0,9.885-9.885V45.885A9.885,9.885,0,0,0,62.061,36ZM68.8,60.641a8.16,8.16,0,0,1-8.16,8.16H47.305a8.16,8.16,0,0,1-8.16-8.16V47.305a8.16,8.16,0,0,1,8.16-8.16H60.641a8.16,8.16,0,0,1,8.16,8.16Z"
                                                            transform="translate(-36 -36)"
                                                            fill="#fff"
                                                        />
                                                        <path
                                                            id="Path_11178"
                                                            data-name="Path 11178"
                                                            d="M71.333,58.129l-.085-.085-.072-.072a9.058,9.058,0,0,0-6.4-2.642,9.22,9.22,0,0,0-9.157,9.288,9.324,9.324,0,0,0,2.7,6.565,9.072,9.072,0,0,0,6.479,2.7,9.315,9.315,0,0,0,6.538-15.749ZM64.777,70.711a6.093,6.093,0,1,1,6.008-6.093A6.093,6.093,0,0,1,64.777,70.711Z"
                                                            transform="translate(-46.804 -46.644)"
                                                            fill="#fff"
                                                        />
                                                        <path
                                                            id="Path_11179"
                                                            data-name="Path 11179"
                                                            d="M97.095,51.682a2.193,2.193,0,0,1-2.179,2.211,2.161,2.161,0,0,1-1.537-.643,2.215,2.215,0,0,1,1.541-3.77,2.166,2.166,0,0,1,1.389.5l.045.045a1.371,1.371,0,0,1,.2.2l.049.054a2.211,2.211,0,0,1,.494,1.4Z"
                                                            transform="translate(-67.246 -43.423)"
                                                            fill="#fff"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <Booking showModal={showBooking} handleClose={handleClose} />
        </>
    );
}

export default SocialIcons;