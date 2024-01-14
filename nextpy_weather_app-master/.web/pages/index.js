

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Box, Container, Image, Input, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { DebounceInput } from "react-debounce-input"
import { Event, set_val } from "/utils/state"
import { SearchIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export function Text_bcd6a838b98d5774bc73f44f6c421739 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "35px", "fontWeight": "bold", "marginTop": "30px", "marginLeft": "20px", "lineHeight": "10px", "color": "white"}}>
  {state__state.country}
</Text>
  )
}

export function Text_78cb21af64e31088dcdf683977acb46b () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"color": "white", "paddingLeft": "36px"}}>
  {state__state.local_time}
</Text>
  )
}

export function Text_06d926cc6791000a12d7fb45f25d0ca7 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "35px", "fontWeight": "bold", "marginTop": "30px", "color": "white", "lineHeight": "14px"}}>
  {state__state.location}
</Text>
  )
}

export function Box_7b2f00b7068ad6ceebecaace506626e3 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_affa30b54c21cb86a2f984076d7a50fb = useCallback((_e) => addEvents([Event("state.state.route_after_key_press", {})], (_e), {}), [addEvents, Event])

  return (
    <Box onClick={on_click_affa30b54c21cb86a2f984076d7a50fb} sx={{"bg": "white", "height": "40px", "width": "70px", "marginLeft": "6px", "cursor": "pointer", "borderRadius": "5px"}}>
  <SearchIcon sx={{"color": "black", "marginLeft": "14px", "marginTop": "9px"}}/>
</Box>
  )
}

export function Debounceinput_52721d6ad3d10472dfd59714d466a3f5 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_ffb647e32ef716ceb0be4489a27b66da = useCallback((_e0) => addEvents([Event("state.state.get_input_value", {user_input:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_ffb647e32ef716ceb0be4489a27b66da} type={`text`} value={state__state.user_input}/>
  )
}

export function Text_186e68fa6532e5848b9456f734942e26 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "90px", "fontWeight": "bold", "color": "white"}}>
  {state__state.temp}
</Text>
  )
}

export function Text_b10483138d2586c56b77ed0fcd35545a () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"paddingLeft": "48px", "color": "white"}}>
  {state__state.current_time}
</Text>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Container sx={{"bg": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", "height": "100vh", "maxWidth": "auto", "paddingTop": "30px"}}>
  <Box sx={{"bg": "linear-gradient(to right,rgba(163, 196, 237, 0.43) 0%,rgba(163, 196, 237, 0.43) 64%,#1B5886 64%,#1B5886 100%)", "width": "60%", "height": "550px", "my": "auto", "mx": "auto", "borderRadius": "15px", "paddingTop": "50px", "border": "5px solid white", "boxShadow": "0px 4px 6px black"}}>
  <Box sx={{"marginRight": "20px", "display": "flex", "justifyContent": "space-between"}}>
  <Box>
  <Text sx={{"color": "white", "fontWeight": "bold", "fontSize": "12px", "marginLeft": "31px"}}>
  {`weather.nextpy`}
</Text>
  <Image src={`/paris.webp`} sx={{"width": "340px", "height": "220px", "position": "absolute", "top": "150px", "border": "3px solid rgba(2,0,36,1)", "marginLeft": "20px", "boxShadow": "0px 4px 6px black"}}/>
  <Container sx={{"display": "flex", "justifyContent": "space-between", "width": "100%", "marginTop": "20rem"}}>
  <Text_186e68fa6532e5848b9456f734942e26/>
  <VStack sx={{"marginLeft": "30px"}}>
  <Text_06d926cc6791000a12d7fb45f25d0ca7/>
  <Text_78cb21af64e31088dcdf683977acb46b/>
</VStack>
  <Box>
  <VStack sx={{"marginLeft": "15px"}}>
  <Text_bcd6a838b98d5774bc73f44f6c421739/>
  <Text_b10483138d2586c56b77ed0fcd35545a/>
</VStack>
</Box>
</Container>
</Box>
  <Box>
  <Box sx={{"display": "flex", "width": "200px", "mx": "auto"}}>
  <Debounceinput_52721d6ad3d10472dfd59714d466a3f5/>
  <Box_7b2f00b7068ad6ceebecaace506626e3/>
</Box>
</Box>
</Box>
</Box>
</Container>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
