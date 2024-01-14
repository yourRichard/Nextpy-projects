

import { Fragment, useCallback, useContext } from "react"
import { Container_90b208b8a5cae2adeadaef994de850aa, Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Button, Container, Divider, HStack, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import { AtSignIcon, CalendarIcon, DragHandleIcon, EmailIcon, LockIcon, TimeIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export function Container_31089226e01fb6b5bea3a30a47902f98 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double red", "cursor": "pointer", "borderRadius": "10px"}}>
  <EmailIcon sx={{"transform": "Scale(1.5)", "_light": {"color": "rgba(255,255,255)"}}}/>
</Container>
  )
}

export function Button_fdbc1ec9455adcea88b642b1ffa00f0f () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_24f77ee6b09d19a1b966f5fb2f535473 = useCallback((_e) => addEvents([Event("state.state.setFull", {})], (_e), {}), [addEvents, Event])

  return (
    <Button colorScheme={`none`} onClick={on_click_24f77ee6b09d19a1b966f5fb2f535473} sx={{"color": "rgba(255,255,255,0.81)"}}>
  <Text sx={{"fontSize": "10px"}}>
  {`1x`}
</Text>
</Button>
  )
}

export function Button_4e7b75e940087b75a0b01571e2a0c13c () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_3daa01a546a3dd0d0fcfe7b035a9e0bf = useCallback((_e) => addEvents([Event("state.state.setThree", {})], (_e), {}), [addEvents, Event])

  return (
    <Button colorScheme={`none`} onClick={on_click_3daa01a546a3dd0d0fcfe7b035a9e0bf} sx={{"color": "rgba(255,255,255,0.81)"}}>
  <Text sx={{"fontSize": "10px"}}>
  {`3x`}
</Text>
</Button>
  )
}

export function Hstack_9a0abed8f5df4e231983b6ba0f9e2bfa () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <HStack spacing={state__state.spacing}>
  <Vstack_d6730faae39df834fd4a770fbc0e0855/>
  <Vstack_1c13de7b2d47a897b3d65179c6b3a46a/>
</HStack>
  )
}

export function Vstack_d6730faae39df834fd4a770fbc0e0855 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <VStack spacing={state__state.leftSpacing} sx={{"transition": "all 550ms ease"}}>
  <HStack>
  <VStack>
  <Container_75532d4a996d091209653ec040f8b786/>
  <Container_61fd3fae2b751ebac965be48d78e8370/>
</VStack>
  <Container_3354832276322461a590268e2ed37864/>
</HStack>
  <Container_4797c79e6575a22ab8d2169a31c5f557/>
</VStack>
  )
}

export function Container_0dd388296f696290caf9dd4f6c75c838 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_3f735831d831f0784eb2f3dfe2b183e6 = useCallback((_e) => addEvents([Event("state.state.passwordGenerate", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_3f735831d831f0784eb2f3dfe2b183e6} sx={{"width": "5em", "height": "10.5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double orange", "cursor": "pointer", "borderRadius": "10px"}}>
  <LockIcon sx={{"transform": "Scale(1.75)", "_light": {"color": "rgba(255,255,255)"}}}/>
</Container>
  )
}

export function Container_61fd3fae2b751ebac965be48d78e8370 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_5aaba1fcde31f4d37a49fad68bb4d791 = useCallback((_e) => addEvents([Event("state.state.getQuates", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_5aaba1fcde31f4d37a49fad68bb4d791} sx={{"width": "5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double teal", "cursor": "pointer", "borderRadius": "10px"}}>
  <AtSignIcon sx={{"transform": "Scale(1.5)", "_light": {"color": "rgba(255,255,255)"}}}/>
</Container>
  )
}

export function Container_ff5ea44dac2816f0127b4e29361e2889 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "10.5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double purple", "cursor": "pointer", "borderRadius": "10px"}}>
  <EmailIcon sx={{"transform": "Scale(1.75)", "_light": {"color": "rgba(255,255,255)"}}}/>
</Container>
  )
}

export function Container_3354832276322461a590268e2ed37864 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_621450f5c3c4eaff3813b096caa8fd1d = useCallback((_e) => addEvents([Event("state.state.getDate", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_621450f5c3c4eaff3813b096caa8fd1d} sx={{"width": "5em", "height": "10.5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double orange", "cursor": "pointer", "borderRadius": "10px"}}>
  <CalendarIcon sx={{"transform": "Scale(1.75)", "_light": {"color": "rgba(255,255,255)"}}}/>
</Container>
  )
}

export function Text_cc9c0555b7fb0fc8a2e1a78b20573e2c () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "32px", "color": "rgba(255,255,255,0.81)"}}>
  {state__state.prompt}
</Text>
  )
}

export function Container_4797c79e6575a22ab8d2169a31c5f557 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_74e0a9915bc5871254aa97b5c007e4a0 = useCallback((_e) => addEvents([Event("state.state.getTime", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_74e0a9915bc5871254aa97b5c007e4a0} sx={{"width": "10.5em", "height": "10.5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double gray", "cursor": "pointer", "borderRadius": "10px"}}>
  <TimeIcon sx={{"transform": "Scale(4)", "_light": {"color": "rgba(255,255,255)"}}}/>
</Container>
  )
}

export function Button_cbb2ea6934937391e2a6f6318c8d2b6c () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_fff55c8a8481ac2300f52733f0af6685 = useCallback((_e) => addEvents([Event("state.state.setHalf", {})], (_e), {}), [addEvents, Event])

  return (
    <Button colorScheme={`none`} onClick={on_click_fff55c8a8481ac2300f52733f0af6685} sx={{"color": "rgba(255,255,255,0.81)"}}>
  <Text sx={{"fontSize": "10px"}}>
  {`2x`}
</Text>
</Button>
  )
}

export function Vstack_1c13de7b2d47a897b3d65179c6b3a46a () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <VStack spacing={state__state.oneBlockSpace} sx={{"transition": "all 550ms ease"}}>
  <HStack>
  <VStack>
  <Container_90b208b8a5cae2adeadaef994de850aa/>
  <Container_31089226e01fb6b5bea3a30a47902f98/>
  <Container_90b208b8a5cae2adeadaef994de850aa/>
</VStack>
  <VStack>
  <Container_332c859ac5a3f69d796d3ec8df6d2ae5/>
  <Container_0dd388296f696290caf9dd4f6c75c838/>
</VStack>
</HStack>
  <Container_ff5ea44dac2816f0127b4e29361e2889/>
</VStack>
  )
}

export function Container_75532d4a996d091209653ec040f8b786 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_f21b478ab1891a165663d728651649d0 = useCallback((_e) => addEvents([Event("state.state.getMovies", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_f21b478ab1891a165663d728651649d0} sx={{"width": "5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double red", "cursor": "pointer", "borderRadius": "10px"}}>
  <DragHandleIcon sx={{"transform": "Scale(1.5)", "_light": {"color": "rgba(255,255,255)"}}}/>
</Container>
  )
}

export function Button_b5b047e32d0e59123120f5f92c59e6a6 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_c9af3746a7fc6cb7b7f93c03c9612530 = useCallback((_e) => addEvents([Event("state.state.setFour", {})], (_e), {}), [addEvents, Event])

  return (
    <Button colorScheme={`none`} onClick={on_click_c9af3746a7fc6cb7b7f93c03c9612530} sx={{"color": "rgba(255,255,255,0.81)"}}>
  <Text sx={{"fontSize": "10px"}}>
  {`4x`}
</Text>
</Button>
  )
}

export function Container_332c859ac5a3f69d796d3ec8df6d2ae5 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf3db2764e74ca232f8b7c9ca3c8344d = useCallback((_e) => addEvents([Event("state.state.emptyFunction", {})], (_e), {}), [addEvents, Event])

  return (
    <Container onClick={on_click_cf3db2764e74ca232f8b7c9ca3c8344d} sx={{"width": "5em", "height": "5em", "boxShadow": "0px 10px 20px 0px rgba(0,0,0,0.5)", "_hover": {"boxShadow": "none"}, "transition": "all 450ms ease", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": "5px double gray", "cursor": "pointer", "borderRadius": "10px"}}>
  <EmailIcon sx={{"transform": "Scale(1.5)", "_light": {"color": "rgba(255,255,255)"}}}/>
</Container>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <VStack sx={{"width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center", "height": "100vh", "paddingBottom": "80px"}}>
  <Spacer/>
  <VStack spacing={`0`} sx={{"width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center"}}>
  <HStack>
  <Text_cc9c0555b7fb0fc8a2e1a78b20573e2c/>
  <Divider orientation={`vertical`} sx={{"@keyframes blink": {"0%": {"opacity": "0"}, "50%": {"opacity": "1"}, "100%": {"opacity": "0"}}, "animation": "blink 0.9s infinite", "height": "4em", "transform": "translateX(5px)"}}/>
</HStack>
</VStack>
  <Divider sx={{"height": "2em", "opacity": "0"}}/>
  <Hstack_9a0abed8f5df4e231983b6ba0f9e2bfa/>
  <VStack spacing={`0`} sx={{"paddingTop": "30px"}}>
  <Text sx={{"_light": {"color": "rgba(255,255,255,0.81)"}, "fontSize": "14px"}}>
  {`Change your layout here`}
</Text>
  <HStack spacing={`0`}>
  <Button_fdbc1ec9455adcea88b642b1ffa00f0f/>
  <Button_cbb2ea6934937391e2a6f6318c8d2b6c/>
  <Button_4e7b75e940087b75a0b01571e2a0c13c/>
  <Button_b5b047e32d0e59123120f5f92c59e6a6/>
</HStack>
</VStack>
</VStack>
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
