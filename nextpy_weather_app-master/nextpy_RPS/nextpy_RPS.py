"""Welcome to Nextpy! This file outlines the steps to create a basic app."""

import nextpy as xt
import asyncio
import requests
from datetime import datetime
import time

API_KEY: str = open('API_KEY.txt','r').read()

style: dict = {
        "font_family":"Arial, Helvetica, sans-serif"
    }

class State(xt.State):
    """The app state."""
    city = ""
    country = ""
    location=""
    temp=""
    speed=""
    humidity=""
    img_src=""
    current_time = ""
    
    local_time = ""
    
    user_input = ""
    
    
    def get_input_value(self,user_input):
        self.user_input = user_input
        
    async def route_after_key_press(self):
        if self.user_input != "":
            await self.get_data_from_weather()
    
    
            
    async def get_data_from_weather(self):
        __city__ = self.user_input
        response = requests.get(get_weather(__city__))
        await asyncio.sleep(0.5)
        
        time_object = time.localtime()
        local_time = time.strftime("%B %d %Y",time_object)
        self.local_time = local_time

        time_here = datetime.today().strftime("%H:%M- %p")
        self.current_time = time_here

        if response.status_code == 200:
            data = response.json()

            self.city = __city__
            self.country = data["sys"]["country"]
            self.temp = f"{int(data['main']['temp'])}°C"
            self.humidity = f"{int(data['main']['humidity'])}%"
            self.speed = f"{int(data['wind']['speed'])}km/hr"
            self.location = f"{self.city.capitalize()}"
            
            self.user_input = ""
            
    
def get_weather(city):
    BASE_URL = f"http://api.openweathermap.org/data/2.5/weather?appid={API_KEY}&q={city}&units=metric"
    return BASE_URL


def index() -> xt.Component:
    return xt.container(
      xt.box(
        xt.box(
             xt.box(
             xt.text(
                 "weather.nextpy",
                 color="white",
                 font_weight="bold",
                 font_size="12px",
                 margin_left = "31px"
             ),
             xt.image(
                 src="/paris.webp",
                 width="340px",
                 height="220px",
                 position="absolute",
                 top="150px",
                 border="3px solid rgba(2,0,36,1)",   
                 margin_left="20px",
                 box_shadow="0px 4px 6px black"
             ),
             xt.container(
                 xt.text(
                     State.temp,
                     font_size="90px",
                     font_weight="bold",
                     color="white",
                 ),
                 xt.vstack(
                     xt.text(
                         State.location,
                         font_size="35px",
                         font_weight="bold",
                         margin_top="30px",
                         color="white",
                         line_height="14px"
                     ),
                     xt.text(
                         State.local_time,
                         color="white",
                         padding_left="36px",
                         
                     ),
                    margin_left="30px",
                 ),
                 xt.box(
                   xt.vstack(
                     xt.text(
                         State.country,
                         font_size="35px",
                         font_weight="bold",
                         margin_top="30px",
                         margin_left="20px",
                         line_height="10px",
                         color="white"
                     ),
                     xt.text(
                         State.current_time,
                         padding_left="48px",
                         color="white"
                     ),
                     margin_left = "15px"
                 ),
                 ),
                 display="flex",
                 justify_content="space-between",
                 width="100%",
                 margin_top="20rem",
             ),
          ),
          xt.box(
              xt.box(
                  xt.input(
                    value=State.user_input,
                    on_change=State.get_input_value,
          ), 
          xt.box(
              xt.icon(tag="search",color="black",margin_left="14px",margin_top="9px"),
              bg="white",
              height="40px",
              width="70px",
              margin_left="6px",
              cursor="pointer",
              border_radius="5px",
              on_click=lambda:State.route_after_key_press,
            ),
            display="flex",
            width="200px",
            mx="auto"
            ),
          ),
            margin_right="20px",
            display="flex",
            justify_content="space-between"
        ),
        bg= "linear-gradient(to right,rgba(163, 196, 237, 0.43) 0%,rgba(163, 196, 237, 0.43) 64%,#1B5886 64%,#1B5886 100%)",
        width="60%",
        height="550px",
        my="auto",
        mx="auto",
        border_radius = "15px",
        padding_top="50px",
        border="5px solid white",
        box_shadow = "0px 4px 6px black"
      ),
    bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    height="100vh",
    max_width = "auto",
    padding_top="30px",
    )


# Add state and page to the app.
app = xt.App(style=style)
app.add_page(index)
app.compile()
