    
    This below code block is written in python, if you want to use it itstread of javascript code block, just place it instread of Javascript code in main.js file


//   const lines = [
//   '<div class="line"><span class="comment"># Blockchain Enthusiast</span></div>',
//   '<div class="line"><span class="comment"># Routine: EAT -> CODE -> Sleep -> repeat.</span></div>',
//   '<div class="line"><span class="comment"># Technically I am into technology.</span></div>',

//   '<div class="line"><span class="keyword">class</span> <span class="classname">Hasnain</span><span class="punctuation">:</span></div>',

//   '<div class="line indent"><span class="keyword">def</span> <span class="function-name">__init__</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',
//   '<div class="line indent-2"><span class="parameter">self</span>.<span class="property">name</span> <span class="operator">=</span> <span class="string">\'Muhammad Hasnain\'</span></div>',
//   '<div class="line indent-2"><span class="parameter">self</span>.<span class="property">email</span> <span class="operator">=</span> <span class="string">\'shkhasnain55@gmail.com\'</span></div>',

//   '<div class="line indent"><span class="keyword">def</span> <span class="function-name">work_experience</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',
//   '<div class="line indent-2"><span class="keyword">return</span> [</div>',
//   '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'March 2018 - May 2022\'</span>: <span class="string">\'Operations & Strategies manager : Full-time : Onsite\'</span> <span class="punctuation">},</span></div>',
//   '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'Jun 2022 - Nov 2023\'</span>: <span class="string">\'Professional Freelancer : part-time : hybrid\'</span> <span class="punctuation">},</span></div>',
//   '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'Mar 2023 - Aug 2024\'</span>: <span class="string">\'Senior manager Business Operations : Full-time : Onsite\'</span> <span class="punctuation">},</span></div>',
//   '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'Sep 2023 - Dec 2024\'</span>: <span class="string">\'Management team member : part-time : Onsite\'</span> <span class="punctuation">},</span></div>',
//   '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'Apr 2024 - Feb 2025\'</span>: <span class="string">\'Member of the management : part-time : Onsite\'</span> <span class="punctuation">}</span></div>',
//   '<div class="line indent-2">]</div>',

//   '<div class="line indent"><span class="keyword">def</span> <span class="function-name">education</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',
//   '<div class="line indent-2"><span class="keyword">return</span> [</div>',
//   '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'2022-2026\'</span>: <span class="string">"Bachelor of Science in Computer Science from Bahria University, Islamabad, Pakistan"</span> <span class="punctuation">}</span></div>',
//   '<div class="line indent-2">]</div>',

//   '<div class="line indent"><span class="keyword">def</span> <span class="function-name">skills</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',
//   '<div class="line indent-2"><span class="keyword">return</span> [</div>',
//   '<div class="line indent-3"><span class="string">\'HTML\'</span>, <span class="string">\'CSS\'</span>, <span class="string">\'JavaScript\'</span>, <span class="string">\'Bootstrap\'</span>, <span class="string">\'React.JS\'</span>, <span class="string">\'Next.js\'</span>,</div>',
//   '<div class="line indent-3"><span class="string">\'C++\'</span>, <span class="string">\'Data Structures\'</span>, <span class="string">\'PHP\'</span>, <span class="string">\'Blockchain\'</span>, <span class="string">\'Ethereum\'</span>,</div>',
//   '<div class="line indent-3"><span class="string">\'Solidity\'</span>, <span class="string">\'Web3.js\'</span>, <span class="string">\'Git\'</span>, <span class="string">\'GitHub\'</span>,</div>',
//   '<div class="line indent-3"><span class="string">\'VS Code\'</span>, <span class="string">\'Visual Studio\'</span>, <span class="string">\'Jupyter Notebooks\'</span>,</div>',
//   '<div class="line indent-3"><span class="string">\'Presentation\'</span>, <span class="string">\'Planning\'</span>, <span class="string">\'Organized\'</span>,</div>',
//   '<div class="line indent-3"><span class="string">\'Creative Problem-Solving\'</span>, <span class="string">\'Teamwork\'</span>, <span class="string">\'Active Listening\'</span>,</div>',
//   '<div class="line indent-3"><span class="string">\'Adaptability\'</span>, <span class="string">\'Analytical Thinking\'</span></div>',
//   '<div class="line indent-2">]</div>',
// ];
                  // This Above code block is written in python language





//Extra css code you can use to enhance performance, If you cant use, its okay, code will work properly

/* -------------------------------------------------------------------*/
/* ::-webkit-scrollbar {
    width: 0;
}

#scrollpath1 {
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
}

#scrollpath2 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 100%;
}

#progressbar1 {
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    background: linear-gradient(to top, #808080, #800000);
    animation: animate1 5s linear infinite;
}

#progressbar2 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 10px;
    background: linear-gradient(to bottom, #1d2b64, #f8cdda);
    animation: animate1 5s linear infinite;
}

@keyframes animate1 {
    0%,
    100% {
        filter: hue-rotate(0deg);
    }
    50% {
        filter: hue-rotate(360deg);
    }
}

#progressbar1::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #808080, #800000);
    filter: blur(10px);
}

#progressbar2::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #1d2b64, #f8cdda);
    filter: blur(10px);
}

#progressbar1::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #808080, #800000);
    filter: blur(30px);
}

#progressbar2::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #1d2b64, #f8cdda);
    filter: blur(30px);
}






.box {
    position: relative;
    width: 350px;
    height: 350px;
    background: #808080;
    border-radius: 50%;
    overflow: hidden;
}

.box::before {
    content: '';
    position: absolute;
    inset: -10px 140px;
    background: linear-gradient(315deg, #101820, #00d4ff); 
    transition: 0.5s;
    animation: animate2 4s linear infinite;
}

.box:hover::before {
    inset: -20px 0px;
}

@keyframes animate2 {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.box::after {
    content: '';
    position: absolute;
    inset: 6px;
    background: #000000;
    border-radius: 50%;
    z-index: 1;
}

.pic {
  position: absolute;
  inset: 30px;
  border: 6px solid #808080;
  z-index: 3;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img-wrapper {
  width: 150px; /* or 100% if you want full coverage 
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.pic img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
    pointer-events: none;
    z-index: 3;
}

.box:hover .pic img {
    opacity: 0;
}

.pic h2 {
    position: relative;
 
    text-align: center;

    color:  #00d4ff;
    

    font-family: 'Arial', sans-serif;
    
    font-size: 2rem;
    font-weight: 400;
    margin-top: 10px;
}

.pic h2 span {
    font-weight: 200;
    font-size: 1.5rem;
} 
*/
