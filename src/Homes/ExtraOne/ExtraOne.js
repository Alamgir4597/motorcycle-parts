import React from 'react';

const ExtraOne = () => {
    
    return (
        <div className='m-5 ' >
           <h1 className='text-center text-2xl font-bold  m-5'>New Collections</h1> 
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center '>
                
               
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/photos/pouring-motor-oil-for-motor-vehicles-from-a-gray-bottle-into-the-picture-id1325588832?k=20&m=1325588832&s=612x612&w=0&h=WLFM5NKYdWmJmLgOb6_uPCdzWGMbUrdIHb53jjq2eMA=" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Engine Oil</h2>
                        
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYFxcZGh0XGBkaGhodGRoZGhkZGRkZHRkgIiwjGh0pIBohJDYkKS0vMzMzGSI4PjgyPSwyMy8BCwsLDw4PHhISHjIiIykyMjIyMjIyMjIyNTIyMzIyMjIyMjIyMjIyNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAN4A4wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEYQAAIBAgMECAMFBwIFAgcAAAECEQADBBIhBTFBUQYTImFxgZGhMlKxFELB0fAjU2JygpLhM0MVc6Ky8WPSBxYkg6Ozwv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACwRAAICAQMDAwMDBQAAAAAAAAABAhEDEiExBBNRQWGBIpGhQnHRFDIzseH/2gAMAwEAAhEDEQA/ABpdYnWANdNdOFJgMYHkBSD38RPPnVq1ZyKoHADz3yT601iRPeZ8P1+Nc1otTGXMSRcRMs5tZ5CD3fqaa7ACWnVsojmTTs5kHlp4z/4p5w2Ya6a5qxtxMNlYBhuInXfVR3OZwbhUCf1Hd+NELNoKIG6ql7ZysxYsZMndukRWTVmadEwxtv5uIA0O8yAN2nwn0qwaHnZg+c7wdw3guf8A+vaiBIoSr0Cr9QlgD2N06ngD+t/1qwzGPhH9un1oI1NMd1cM+jUpOVhDyMPlg9wA/Gl64cj7fnWfJHd7UhddNR7cqT+hXkxfGDVhDOSOZABHg2aVidI13+NO2oy5UAYGJ4jkBw3UM61PmXdO8bt3pXM6zEifEVaPTtSTbujJUNvfCfCh53/1UQukZDHI/WhzMJjv/CutHRi4M/t49oeH4GtJikBvvzKWz/8AiSs1t89ofrhWhzzfnnbt/wD6bRq36Dny/wCT4JSVWdJgSTpxmP8AtNNbFgGI4xv03kH0iasMvGBO6SOFR9TO8+lTteotP0Kb4otpEfr8iDTEDmNN8cDpO+ia2Y4VzUdS9AaX6lFC4A08dOOlPIbLvM5uQ3Zo5ctasFqazUrY1FeHht+7Tdvk7o7o30xVufjqeRaAecgj0qwXFRs4rWaiBbTxBadImTPHX3513UCR4knv4gHwMelSG4KaborWaiC7gcxLTv7j+ddU2fuNJWs1BJrbEAZj7zqTP4e9cmDY/EeMn1Un6H1rSXOhDfdxdweNsH6MKpYjoZix8F9H8ZU+4j3qrxSRJZIgsYL+LlE+IPf38OIp/wBl1JJBGpjkS+Y+UCPWonstlBV2PMGAQfHj7VSuXrg3m4v9Ct9HFSdlVQWuWgSTC65d400nQ+vtUb4aY7W5QpMa6AjQzpM+1Bmx78HB8Vj6MahbadzhkPmw/CgrGoPth51LCdeHzCDx8PSpBYBMtBkknTmoWN55VmTti98in+o/lSHbl4f7a/3H8qNNgo0z4aVUZtVIMxMmNTv36nnvrnsSSZHA/DOojjO7Td71mP8A5hvfu1/uP5UT2fiMXdtvd6lVsoCzXWYhfBdO2xOgA40VCTFbS5CBwQ5+2h7MDwjX1pjIqEEvuM9/3dP+njP40MfHu5hZq5hcKB2rnaPLgPzNHRL1AmnwS2rOf4QcsKstopCmfP0q9aw1tF7RnnOg47/U1VvY0LoNTVJ7pcyxn6U8MEp8ujSzQhwrYSfaNtRCJMaboHqdaqvtO4dyovlP109qjRBU6p3VePSxXuSl1c/TYqXb9xt+U+Nu2fqtVnvuDm0nTXKvAQBoOAEeVX7qGh15ORpnijXBPvTb3Y9drMN6qfAQfXWpxtlI0Qk99zKPZCaA3vEVUcHnU5YojxnI1Zx1xvht2/O67fQCoLt6+dyWx4M34g1mUxdxDIJonhdv8Lg8x+VReNoqpplwnEc7fmrH8qYUv/PbHhbP/uqyu0EYSJI8vzppxg5H2pLZVQbK/V3/AN4o8LY/OmGxeP8Au+i/5q0uKkgZeMb6sxQsDjXIL+y3f3pP67vzqwi3FWBc14kyfaYFWnWmstDUwaUD3wl0kk3G15CB5CdK6iOWuo6mGke1CkYxrSTUeJY5GP8ACfoa9NnnI8WGLcj4jB19acl1yD22nhrp5zVW38I8BU2G3mZiNY8QfwrzHye5pSjwLcsORJLn+oHnu18KHXGad5I76MKwmd+oPwwSARp37qHPbPGsCKsptS2UJYDNoatWcK1x1RFLMxhQN5Nek9GuiyYdWZ8rX8uaSRltTxPFVEb9CdY1ErWENRHNkjBe5kdlbNsIC+IW7duQeqsrZudoCJcsy5CBykgcQdAX7Z2hcv2BAS1ZRgDbLzcuXTvMHtMEBAEwAN0SFG5udMMHb7X2lnYTmy2mzvB0VCRlRD6nTtcT5x0p6QnGXus6tbYAyKBq2UEmXb7x18vc9EYJbI86U3J7lBHy7iR4aVKMU3zN6mh3W05XqlIW2X0uVZtCao4dSSAASSYAAkkncABvPdW02Z0cCQcSSG/coRn/AK31Fv8AlEt4UzkorcVRcnSKOzcC9xsttC7cgPc8h3mtNhOjqgTceT8tuD63D2R/SGolg10Fu2gVeFtBoe88XPexPlV0XETQnrG+VT2R4vx8B61LXKWyK9qMN5Mp2NmWlMW7KE8yvWN4y8geQFMxmPW1pcxASPuKWdh3ZbcqvqKvNYu3hlGi/KvZQePPzk1UfYVhNbhNxvlXRfM/58qWUF+pt+yHjkf6UkvLAmL29hGBFy9mHK5ZuOPQhqDX8Lsq7qLtm2e43LPs6KlaTFWbXDC2P6kB96DYzD4f72CsH+UFD6ipPHJcJ/cosqfLX2Ad/oIzjNhb1u6OAlW/67ZYewrObQ6O4i1PWWXA+ZRmXzKyB5xWjv4XATm+y3bTDc1q8SR4Z91WcNtTq4FraV1R8mLtdavh1gkqPAik1Sjzfyh6jLivhnnyB0Moav4XHh+y3Zb2Nbu9bt31zX8JbuDjiMDcD+bW5z+ufwrObS6Jh1a7g7gxCL8SqIvW/wCe1o3sD3U30z4MpSxsrWviHiPrRQ1mcBiiGVbh4gBvPca001GSplJzUqaGkUkClNIzACSYA3k0BTq6m5xXVjHtM1Diz+zf+Rv+01IKZiVlHHNSPY16jPOR49Z2HiSqstrMpGhDJr7zSjY+IG+y3mVHvNaXZNwi2sGNKtgEmWJJ7685xPU78jJrsa+f9tR/Wn51DidkXUGYoOWjKTPgNeFbM0zGW2t22u9U9xgJRApJMGRoBxaDPJVNNjx6mTn1MooyGOQWMqKT1uUG6wZgFz/DaGUiZgk9w7xUdzAsWt21YdY4zMI0UROp1PCpLVsqS94GUPW3J0L3X+FBPAewApej91nxQdjLNmJ8Y4chXUqWyONtzuUgRjdn3UYqcrEGDlbl4xQ24WUwwIPIiK02K+NvE/Wm5ARBAI5ESPQ0dQEjMq9X9mYW5euJatKXuOYVR9e4Aak8AKLW+jy3TFsFD3ar5g/gRRbZ2HGGtNbskXLtwHr7qFSVt5oW1bAJYKdCx4kgbqLlSsKjqdBLZ9i3hBltMLl4iLl8blneln5V4F951iBRLCoAhuXGyWgYzRJZvltr95vYcaEbNRBba/eJWyhywNHu3N4tJyPM8B7WMLh7mLP2jEMLNhRCAaKqcEReA/i3k8Dw5+d5PY6b0rTBb+QpYx9y8ersoVQ71GrMOdx/w0UUfw2Gt2v9Rs7/ACLuHif151mztoKOrwy9XbG9vvt3zvHjv8N1SYa8R+uNdEU2vC/JzSpPy/wa18YWEaKvBRu/zVK6woZbxU0rYr/FOklwTbb5ExP6ihOJt1du3arOwphTNY/DVn8VYrYY5JrP4y3vpZIeLMwxa22ZGZGG5lJVh5jWiuG6V3Aym8oulfhuSbd9f5bya+Rmaq4q3Qu6lc0scXudEMklsmbLFLYx4LIw66JLFQt0wB/q2l7N3/m2+0NJQ7wPwF11JtXPiHwmZzLw13NpuPEVmEcgggkEGQQYII3EHga0xuPewjYi6Qr2nCpcG+6SRIYbswJ+Ib4M7pqE7XO5eKUuNn+C7euhFLMYA/UeNZ7FYl7rQN09lR+PM99djca12JEAD34mrWxGSWEdvnzHIU0Y6Y6ibep0CyWXskERpxrq1DMvGPOK6jr9gaPc9qWkuDQjuNZYXG+ZvU0vXuNzt6mu9xOJSAuyG/ZrV9jQzZrdmr+avNO8tYK3mbWIXUzx5DxNXbmKZ2OVrRUEr2gYgKHuOSrQAAQsRIYjWm21a0qqHUO4LFWA1AGvM6cdKcpuKsPZS5rEWzqF7LglSNZeZA+Wdd1deODUdiMpxvdEWK2pZKJ1yQjXHWHVXUBCUzXAdFBIiNdfA1Dh9j4Hrf2f7O6BmyAlCAySSbbdmIaTlGlS4a1YdMgV0VWtBkdRMWy1xLem4SC7TOhMwNxPBWyM7yrvdYv1imUAHZRQeSqBu3nNRSle4Z9rT9NmU2l0SfOzW7qMCZAaVJkmQpEhiPLfQgbJuqxFxCgG8t8I/q3e9bK9i7pxNy1a07FoAnW3aBzM7kbmYyFUcY5CpU22CgY22Zbt17doIAWuKojOwYga5TA5ChqVm7M6Vb8GGv4/TqrOiffubmbuXu7/AKcWbPty6AbgZ07tfwrb4vY2EuBTkFpnEqARbfXh1R0J56TVBOi1y1cD23DgZhlYZW7SsvOCdeY3UGmxNkQJgUuwLihoMiZkHuYHMN26Y5zVvH9G8ReClb5uBfhS7A9GUAExpqs99dexP2cdtGzHcCIH90R6TQptrPcc5zMAhQPhQfCxjhxA3kxv40raT9wxuvZijC3LRi5bZNYkjsk8gw7JPcDVxLg4frvoY+2HtPFsszAZSqkAaySGnQLrHE6bjVR8a3xSBxjTKO4aD2HfTrL5A8fg0fXxQ3F7Zs2yc1wT8q9o+26shtXF3iSGeRyXsjzH5k1Ls+zYFvrLilj46HuA3eoNVUr4JtUFb/S4ExatO579PYBjTU2hjrmot27S83zEj0OnmBQ59u5dLVpUX1P4D2oTjNpXLh7bse7cOW6iag7i9oMn+piAzcVRVj1Gs+dCTtyTDiRzGjem4+1CHeoWNJKQyiHbzBhmUgj9ad1DL61Wt3WUypj6HxFW8MGusEtqS7GAo5/l38KnKSrceMXdITZezHxF1babzqW4Ko3sfD3JA40S6TY5GZMLY/0bPZ0+8/3mnjx14kseNXNqYpMFZOGtMDfuAdfcH3RHwKeG/wAgSd50H7C2e6qLoQvcY5LNsCS1wQc0fKkhid0lQdJrlgnllq9Fx/J1zaxQ0rl8/wAEV1QhNtuICt3Nv/6TofA1RS4UYEGCD/5FbBej4wtq5i8Sys6oy20mV61+yuv3yDx3byPhkgLGLYqN27kPyq03oI446+AXeuFmLE7zNdR0G4ePsPyrqTurwU7L8npQNczUwNTLj16J5iBOB+8P4j9aK4IDNmYdlO0RzP3V8z7A0Iwx1f8AnP1oxiFuJhw1u2bjM4YqPlXUAjeZjhzrzUvqfsejzS8kFzN9utMz5mKksOC5s6gDuitOSYMCAACBxgTCwOOnvxrPYHZjL1V27JuvcNy7/Cpt3MqgcIIA9uFGMSwIyi5lYwwaMysQROnw66DQjfzGnViTV2J1UoukndKiYXrdwAOVYHtBXAmYIIUN3eepqJ9kL2jbZ7V1xOYM5hlVwDBaSAbpMEwTqQeKOrT+0trcUmA6GHBmdTox8V750BNOtIAOxcYzGVbhJAiNxO8FeGp7QJ361Zyk9lLuW4LrI6RlTKTMQytmMDfpoOObXdVfF7ID9WguOltChFtQmUdVuKkjMp75O+rD4kp2rls7tWQSoAzmYmQcoHPeBUqOpHZ1PGJzDUjxAEEDwgUrinyNHJODtMBY/AXM+JnD9c93S1c7GVFKwFOYzbymToNdKjv7TuW36sXsvU2ktklDc62/lBK7p3DfIIJrSGNI3cY3eBNQ4jD27gKuoKyG5dobmDCCCOYNJLE/0s6I9SnSnG0Pwl03LaNcTKXUFkO4EjUEH6GhG2tjWltXblq2LdxULjLIU5AWgruggEaAb6Ml6z/TXafVYR4Pau/sl/qBznyWfMiqOKrc5tX1bbGDw+MLzFq4wHac21LRMks2mm4mSeBpLOJS4f8AUUAangQo3wDw7/rTbTC3grtz712bcy0fFlyZR2CcuZ5YyOA1mss7VCUEVUmXsdixdeF3e55fruqfE3dAnBRHnxodghrm5a/lUjvxp4LShZbse71Wdq53qJmrNmSGsaSaeibmPl/5502cw37tx96UYaakw2Je2we2xR13MN47u8VEDSGlaTW4ydcB7opsJ8beIJMKc1xzqQCfiM72JmOZ13A1601ixhbbMctu2qhWY/IJISd8SSYGrFiTJJnxjo9tx8JfW8ozQCrJMB1IOhMGIMHd92l290hv4x811uyD2La6IngOJ/iMn6U0ZKKFlFyZe6XdJGxtwBQVspOReJO7Ow5xuHAeJqrhk3CY7/rQe3vrQ2sOpUHXcONc+WXk6cFRsiuZZMPNdVj7MvL3NdUrOjuRPRc9V712kd6qO5J3ederKajyeLGLfAmEXNcIHFvrU2Iui5iJkrbsqrhgxDZFJUIANzXG114VLsW1DXHIBjQDfJ3fiPWpEwdply9W1qWDOFXsMTzB7XMCNBJ51y9ttNryehizQg6l4IMPtq/ntqWW51xI6sAZ7aMQohl3EiWgzAUTvrTWlYDsKly0ohV0zqVG6ZiSeOh7XrHhMBbttnS3bRjKyqAGNZI5Exw0141Y+zAwQSpJgFYEgEnXnuMxE1XHGUVu7JdRkhNpwVENo21MjNaOb4WJAMatpMAayTyPeKna0zAC7bW5xLATz7WXefhGijeRFR3RcCFWC3QCQ2gU6wQeI0nXTWeEaoGRWYJca25JnNOWQQCwzb5jeSdGmqHOdbfjbvZJmLdyCJCrmAGhBEiYne3OpcUwCk3bbTPaNsExlWA0iSB2jv1E1HBJXrLa3ApAFxBMaqQdSWC6gnXhxGtdYcARbu5WaCquAcoLBOysjQ5TpO+WkzrjFuw4KBFJaBEkySOeupnnEVIzzw0G/wBx+vChGIRPiu2sjZh2rYiP4pU7hmYayfiMCYojZMqArZhHxkkkzOuu/dzrIA9n48OdeY9M8YcTjRYQ9m3+z3gANvusSSBpEakfBW923tHqLF26Y/ZiQCdGfQIo7ixFeTbKshluXrj3ARJW4jQ5dRnuEGQc0MDOu8+IEmPBeozpDi3Li0zI4sjIrKrrpA0hiYiNy9nlO+gjU53JJLGSTJJMkk6kk8TNNQzUrKE+aFioS9c7a1HNZsyQ4tTSaQmmmlsNFo3OzIAOnGn4oIDFvVYG+Zkjd3mqM1KuIIEACToW3tHdwXyE99HUahj6Go2auNNNI2MkLTrVpnYKoLMdABvNW9nbMuXj2B2QYZz8I7uZP8Ik1qvsdvCWWbLmMQSRqx3w0fCunwjTnPCOTNGDUeW/Q6cPTymtXCXqZXF4cW2VcwZozOR8IJ3KDx01nvq+lhmVCGAyjs79+kSPI+tBrl0sxY7yZPia0OFb9mp/hH0rTbSQipt1wVm2aSfiPnO/j711WPtB5fr1rqW5BqJvoHHWq+Ix2XN2VgaQQZiPi3jSoMTjSGyIjM0TMdgcpJP0moLeFec1xgQSMwg7uI310a3J7nPpSWxoNkW4RVEAky0cyTw9PQUWYDcTuyjho2hJHLSPShdvDJc7YM8iNVPd4GBx4d1WLGFYNIdoymF3DcQPE6jluERrXUjmCK5ffv7I/BT75ql7MHQydwAMgaagcBMmR9aoDCXCZ61hOsSY1EQddNddO+pHwzMFPWMpIUaa7hcmZO45h39kajgAl8RMxoBy0/yR+J76Y6IVAZVMmIcTvaI7W4QY/wDND7uzg1sIWbsKVJAgNIMkqG13z499PubNVimcMcrZlAIAB0JmZMSoO8+dYxdsXbZyqjKRk0ysCCq5QNx1A5+HOlyIWLmJB0bcQIiQeUk91Q4bChFVEUnIMuuXRZQkaABicg1Inma69ikBDMyqoB1Ygb41gmY/Oib9iLqXQB0u6RAW5uB0ESBpx7IA9qusIIAMSY9id24eXOhD9IsIrMWxFoHTc6sYj+EnXu8KD7X6bYa3aPVMLt1vhUBgFJkgs0fCvADXQbt4FpBpsEf/ABL2t2kwqsSF/a3f5jORdO4lo/iWs9tD9jhbaArnudpypElBqVLKzKwzEQdJAiJBoRjnuM7XLjZmc5maZknvHp5V1nCFhMgAz7d1SlP1KqNbFdVJMD9caVRAqxcQWwQDmYiJ3CDv/XfVVjSp3uGjiabXFhSJLGFBY8lBJ9qwTqaasjBv94rb49ttf7BLe1ctq2N5dzxAhB/ccxPoKFGKpNOFsxMGOZ0HqdKs2mJYLatjMToFUs/qZI8oo/gOiTv28TcyqBmYZgWC8SznsoO/Wpzyxhy/5KwxSnwv4M1h7RdgqKXc/CFE+ff9K02yuie5r5/+2p/7nH0X1FHNj4zBhmsYYGQpYsF7L5SARnJzNvmSI00ogzV5nV9Zkg9KVf7PU6Po8clqbv8A0QpaVAFUAAaAAQAOQHD8eM1S2oFa24fRY1/x31YxmJW2pZ2AArD7Z2u14wNE4Dn3n9f45+lw5Mk9b+52dVnx4oafPoD8QyZotghRpqZJ7ydPYCj1sRbA5KPpWesJLAczWlcwD4V6+T0R4Ed9yg6mT2R5Ka6iGvdXULDRsy9Utq3ottG86D0mrTCqG00UoQwBABJB7v8AxVNWndk1By2AS7SfD4UdXcK3blwsxVoKxpBHM74NX9m9JMULaB70lyYzLb+BRunLvJMeRoOuz1eTmKx56+f51WvYV1/3JA3TP01qsssbq9xVglV1sbdek1/U513fKvf+dCdqdOMUjQjJpoOwp5T+VZV7jr9/yn/FRtiCSCYkbuyhI8ytCLl5M4xXobG10pxhQBroDNq0W7YiT/Lwn61BtDpBjG+G7d4jeEImflCzw9KyjYp9e22vgPcCrdrHvAHUqx59WDP/AE1lfqwUvRBHB4u+3Ze49131h7ubXgoQsZNTYvZ9y2ue4oWTuLLnPfknMB3kRrQ18ZiWXLbtm2DvNtMhbuJUAka7jpUGD2TiLubJaZ8pytOXRt8amJpZaauToaCk3UVZGWObMSo1J1dd/DjwqC3aLcSe9VZvoKv43ZWKshS6FMxIULlJJAk6ITFJZ2VjLnw2rx8QwHq0Cspxq7VDPHJOqdjRhNIKMeMnLbA/uap7TZFyzaAmZa4XPH92h5089GL6ibhs2h/6l1B7KWNEMJ0NZ9Q1y5/yrL5T4XbhRKOuL43/AG3A8clyq/cDYu4jgA3O/wDZ2z9XdT7VWiyPuu/8zhR6Ks/9VaTE9HEtwAA54hrwOXx6pCvkHPlVR2sWt7oGHC1bUt4Fmzkeoop+wrXuC7Wutuwkc8rPHiXJFSrYvONWhOIB7HmE7A84ohhuuxB/+nw5YT/qXSXA7wznKvgJ8KM2uie5sXeN0gBurVoUAzB+bKYOoCjQ61LJ1EIcv4W7K4+nnPhfLMjZwgLBEzXH+W2J9YkR3hqN4DokzGbzZB+7Qy3gW1A8prR4jFWMLbA7NpD8KqO2/go1b+Y6d9D02g2Iw2IuWma0qB8uWOsYomcln+6pBjKkHfLGuTv5s39q0x8vn4OvsYcP9z1S8Lj5CmEwdqwrhFVAgLXApU3AFUsc+paYBjNxoJ0d2s2LxJF1V6tVz27USit1ltQxB+NwrEZmnfpFQ9Etl3rZuPcARbtp7eV5DtnHZaPuCTOZt/LiI+j+x72HY3blwWQFKGCjMQYJObVU1Ua6nkONNDHjx29Vy8vkEp5MlLTUfC4KfRKywxTkDs21dWPKeyo8Sfoa0G1drW7I7RljuUfEfyHeffdQbG9IAB1WESBPxwTLHiAdWY/M0k0EvAKSXOe5xk5gp7yfjfu3Dj8tCXT9+alJUl6evyNDqV08HCLtv19ELtLG3LpzuYG9UG7x/wA/hQ1jNPdyxk6muC12KKiqRwyk5O5O2WNlpNwHlrRwidBqToBz7qAo5TcB5iak+1NG5f7RSSg5OxoySVBm4jgkGVI3qSRHdB1HnXUF+1t/D/aK6jokHXE9be1Wf262VHHNlUeisfoa1JFY3b1+CJ1CtcuEcwHKoPOI86SXovcbGuX7Ay/jUtKEmX3sBqQTwPKhGIxrNuAXx31Te4SSSdSST3k6mo81Ujjinb3Yks0mtK2RI7SZJk0lIKLYDBhALlwfyJz/AIjVSQ/Zmzd1y4O9VP8A3EfhRgmqYxJJk1Ol2gzEoFR7P2rcw73lSybmZw4M5VHZAOsQaNYTYV11zsBaTi105fY6+sU+9fwGGEuxvuP6Lc9w3kf3Us8cZx0yWw0MkoSuPJTsbSx945baoncis7DxJML4miDbAuwGxuOe2D9xWAY9wVPwLUE2h09uRksqLacAgyD13+mWhNnCY3FGQGCnUs0qp78x7Te9TUMGJXSRTuZ8rq2zUjbOAwRJw9oG5+8uku/kJLAeGWge0+mV/EHKMzzuXWPK2m/xOtENmdBk+K65eN4TsIP5nOv/AG1o8HhrVnKttERTGqQcykxOcTm8ZNQyddGK+hN+/C+5fH0MpP62l+X9jHYTo5jMQR1riyh1ObgBqTkXgACe0RuqXYGFwi3+rNproObLduHdlUsG6oDKFMbiSRO/hWlwu1GuNdXIi5GyqAJJBzqyEse0TAGpA8KA4bHKtxFtWltozqrFpd2UuJEtOUdw9aeDnJS118E5KEXFw/IW29thrNmbRRbhMIGiQugzJb3MRzPZHeazvRd7ty7eZrrAsqs7QGuNDgCGacp7W+CY3RR3atsNZv8AZUFlDtA3lLlttTvMBfICgfRm1cW4zrbLIUKTmyJOZWEuQZ+GIAJ13VHCoLC9Hvu/JfPr7y1cbbLwXumILYZTqct1IkkwCl0bzrwHjUfQkOtm4YZQbgKNqJ7BVsp47gDHOru19r2LaZLgRz2T1YGaWWSDlJMRMdr0rKbR25evzr1dvdAPDkW3nwEChjU54dH5/gebx482v8evyaLa3SK3bkKesfkDoD/E34DWsxfu3sUxNxgFXUicqIDuLH7vnLHgDSps9bSh72ZJ1W2I61xzg6Wk/ibU8Aaq4rFlwAQEtqZS2u6eeurNzdpP0q+HpoYt1u/Jz5+qnl24Xge2JVAVtSBua6RDNpBVB9xTxPxHiQOzQ5jPhwHKldp/AcqSug5ThU9m3xiTwFJat8T5DnRbC4URLak8OQpZSSGSsEm0x3qR4il6k93qKPph0+VfQVJ1S8h6UO4HQZnJ4eq/nS1p8g5D0pa3cDoR6FkPI+hrzHpFjZMcws+EZo/uYnyFb3Fm6AYxeJ3HfdPKvKMfcLufeioq7BqaTRHYAALHXkOZpGaTNIavYHCzDMCR91RvY/l+t1UsmSYKwqr1tzd9xeLHh5VNZe7euQis7ncqgkgeHAd9WhhrI/aYm5m5WrZhQOTXOP8AQD/NT7nSYqvVYa2LSH7tsET3k/HcPia1mCeH6Pi2M2Lura49Vbh7vnHZT3pz9KMPh9MLaAbd1jdu5/cdF8BI7qC2ti4q/rcORd/a0PlbHHxitLgeiFm09tbvbLkgEmRKgkjLosyOObjyqfci+N/2KdmS/u2/czN7aWMxjdnO/huH9R0XyireB6Iuxm7dA5hDnbzY6D3rd2ltW3tHsC3luAksMoZGQKQCAoIggkARmjvrMba26LuVVdwEXLmzAPc5s0aCd8CkyxyOOzSf3HxSxRlum19ixZwWDw2sIGHFznfynd5AVZw+3bbMIUkTpm4xqNOR8ayoZeHqdT6mpLDw6mdxH1rifSJpylJt+52x6z6lGMUkGdqXrly71YZnEBkUkQAUzwFEKDvGgG6qeDxzW+y0ss6qdCp4lflb68au3tMRYPMZD/c6E+SsKdibC3dWkN8wEkjkwkT47/GrvLBRipcNEVgm5ScOUztmX1N+6V+Fj1gnQ6XVO7wY1TbZ9zrGyjKFdgGbQdljEcTu4A0+7ibGGBJaGIjU5nImYCjQDQcPOgGP6S3LhItdgcyRm/uOi+XrQjOc5PQtvL2X/QvFCEV3Hvvst3/w1e0tr27RzMwVuCr8RPEhZ7IPeeNZjH9Ir98lbQKLume1He33fAUJtok5rlwMd5gk+p3mitjG4VFli1w8LaKyIP5nMHyUedPj6aMN3u/x9hMvVynstl+fuQ4DYzPLGDHxMxi2v8zHefc8quXL9u1/pDPcH+6w0X/lod38za8gKp4rbnWQDIUfCiqFRfBZ999U7mPEdkGe+K6DkG4htSzksx11Mknmx31UZiTJriZMnU11EIlSokat6fnTQ0bvX9bqQP50GZF3Db5NE7TzVHZ1xQRNsNx1P+KP2cUn7hP15VNpeSlvwVVp4FEUxifuLfpUv25f3Nr+3/NCo+QXLwCIpaKfbf8A0rP9h/OurVHya5eAviLhgivLrqEEyIMmfHjXpWIasHtpMt1+85v7tfxp4ispW0Udp93Ac/8AFXbPXXdLSGPmO71On1qnZxOQyERj/EM3tMVdbpFe/g/t/wA0JOf6V9ymOOPmbfwghhujc9q9cJ5hfxc8PKr4x2FwwhAJ/h1J8XOp96yWJ2ndufE58tAPAcKqFqj/AE85/wCSXwtkX/qscNsUa93uzWN0s7akL2AylgIkgEEiTz3cK7HdM7twjIqWwrl0MBmUmRvjLuY65Z131k5rq6MeOMFUVRy5Mk8juTsJYnaNy42a5cZ25sZjw5eVQ/au+qUGlinoSy59t8aT/iDcAPOTVOO+l0oUjWwq/SHEkR1hUclAH4VTubQut8Vxz/UarSK4eFBQivQfuTfLZxM6nU11LHdS5fCmEErqUV0jnQMcDXTXZxSdZWMLrS5e+mgnlVvD7OuPuUgc9woNpBSK2Ucas4WwzmFGnOi+E2ABq5k8huovbwijQARU5ZPA8YeQbhcGFFXUt1bWzUgt91SsrRAqUpWrASuyUDFbKK6rOQ8hXUTBTHYU7xWS6Q4UkTGo+nKt+6VVvYJW3iapqolps8icRvEU3SvSsT0etNvT3NCcT0TT7oIplkNoMV50nnWmu9F2G4VWbo84+6aOtA0MA+ddRs7Cf5DSDYb/ACGj3EDQwJXaUcGw3+Q09dgP8lDuI3bYAmkzVpU6Ov8ALU6dGWrdxG7bMpJroPfWzt9Gec1aTo0g3rPrW7gdBg8hpeqNei2tgWh/t+01aTY9n92v9ooazaDzJcOTVuzsi425D56V6cmy7QE5B6CpVsWxuUelZzZtKPPMP0ac/EQPeiNjo3bHxEt7CtmMMnyfhThZT5PelcpDUjNWtlW0+FB4xr61ZGGo71aR8Nd1VvlFI1YydALq6UW6N9VbpDZt84oUGwNlrgKMfZ7fOuOFt/Ma2k2oEZaWiZwtv5j7U04NPm+lajagbXVf+xL81LWo1hD7QtJ1y8TWdbaQ+X3po2kPl96Ngo0TXV50nWLWeG0/4akG0AfuxRs1BhnSmsqxNBxtH+GpbeLk6AeBmPrWTNRYcZTIgjkaXrF4iKgOIneNe6qdzGa5Bz46j0mtZqCjaHdI8dfSnqyxIigxxzL8QHCInd5077TxAjjHD/FazUGutXkPWu61Z3e9B/t3dXfa+6tZtIa+0Ly96cMVb5e9AhijxpPtXGK1moPjFW4rmxdvnQAYrup32yOFazaQ2cXaj4veKcmMt6HMoH8wOtBP+IEcK5NptxA9BWsGkOLirZ4k0/rE7/WgDbTPKmvtM8qGobSaBnt8yKYbtvmfSgP/ABHuph2meVDUajRB7fzGuzKfvGsy20e6oztUjhW1INM1mRfmrsoH3qx522w3A1InSM/eSfCtaBTNZC/NTWRPmoJb2oG+6an+1TwogoJ5E/ee1dQzrByrq1mpn//Z" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Helmet </h2>
                        
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://static-01.daraz.com.bd/p/03ccb0a1ebafb1fec1b52fa510484544.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Rain  Coat</h2>
                       
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
               
               

              
            </div>

        </div>
    );
};

export default ExtraOne;