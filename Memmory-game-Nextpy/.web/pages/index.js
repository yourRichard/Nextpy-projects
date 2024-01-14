

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Button, Container, HStack, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Text_5e4bb45ad379fef09c811233091b20ae () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_577590aae29406e47624d80655d5ae32 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(0),emoji_type:`\ud83d\udc83`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_577590aae29406e47624d80655d5ae32} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(0).at(1)}}>
  {`💃`}
</Text>
  )
}

export function Text_ff94acbb041111976b45a0b27264c738 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_d3deb63fa011798697b508ac381e77b5 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(1),emoji_type:`\ud83e\udd73`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_d3deb63fa011798697b508ac381e77b5} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(1).at(1)}}>
  {`🥳`}
</Text>
  )
}

export function Text_5b81ed97f4998a5861433bfd9405b009 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_dacc7a49d3ef53dfaae18ea7f512bacd = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(9),emoji_type:`\ud83c\udf85`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_dacc7a49d3ef53dfaae18ea7f512bacd} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(9).at(1)}}>
  {`🎅`}
</Text>
  )
}

export function Text_ddc1bb33bce01079ba4d9e4348362a4a () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_219cde0c9b8849c707d1ccba2e94e0de = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(7),emoji_type:`\ud83c\udf81`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_219cde0c9b8849c707d1ccba2e94e0de} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(7).at(1)}}>
  {`🎁`}
</Text>
  )
}

export function Text_301ba2c829842abc0f4c6013c7d77a17 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "25px", "fontWeight": "bold", "color": "black"}}>
  {state__state.result}
</Text>
  )
}

export function Text_304f49513d7c558c26f75dd64b7fe2b9 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_33c71dc388b318f87f56b17d8fedd63b = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(10),emoji_type:`\ud83c\udf81`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_33c71dc388b318f87f56b17d8fedd63b} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(10).at(1)}}>
  {`🎁`}
</Text>
  )
}

export function Text_ab5c63d7e3e3df8ac1a2ac2af4e61ebb () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_1e27f88e54dbe033153bfb3488586898 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(4),emoji_type:`\ud83e\udd73`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_1e27f88e54dbe033153bfb3488586898} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(4).at(1)}}>
  {`🥳`}
</Text>
  )
}

export function Text_7aee5e5527470b0aa5e72ac2594dfa22 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_59af7ceb739c67cc4e49d9d53d83b281 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(14),emoji_type:`\ud83c\udf81`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_59af7ceb739c67cc4e49d9d53d83b281} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(14).at(1)}}>
  {`🎁`}
</Text>
  )
}

export function Text_26532c3bb62bd72f0e41f00f9ba43760 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_43b0518bdb3a8949d6b91eec46e12e8f = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(13),emoji_type:`\ud83c\udf85`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_43b0518bdb3a8949d6b91eec46e12e8f} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(13).at(1)}}>
  {`🎅`}
</Text>
  )
}

export function Text_738730d95000ae48a578038540e540e1 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_1fd13ae038b4f275f7aafaf1ef3b09db = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(6),emoji_type:`\ud83e\udd73`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_1fd13ae038b4f275f7aafaf1ef3b09db} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(6).at(1)}}>
  {`🥳`}
</Text>
  )
}

export function Text_3a86ccacc61ed19af31a8605dab233b6 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_58a9c28e0ea08b6029c30d6b02c35d37 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(3),emoji_type:`\ud83c\udf85`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_58a9c28e0ea08b6029c30d6b02c35d37} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(3).at(1)}}>
  {`🎅`}
</Text>
  )
}

export function Text_efa3d00d5e25573b08fa58c1e689b1d2 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_2608e6014df95fdc5dc116563b802eac = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(15),emoji_type:`\ud83c\udf81`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_2608e6014df95fdc5dc116563b802eac} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(15).at(1)}}>
  {`🎁`}
</Text>
  )
}

export function Button_206494fe825da846ac4120a7af6cd933 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ca4a0c2fe357773982de46f3247f7495 = useCallback((_e) => addEvents([Event("state.state.reset_game", {})], (_e), {}), [addEvents, Event])

  return (
    <Button colorScheme={`teal`} onClick={on_click_ca4a0c2fe357773982de46f3247f7495} sx={{"width": "150px", "height": "40px", "margin": "15px", "color": "white", "fontSize": "16px", "cursor": "pointer"}}>
  {`Reset Game`}
</Button>
  )
}

export function Text_95da7747805699c9675dcf7d1b424b6c () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_0a8e50c12c35da75bd17745dec82c5bc = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(2),emoji_type:`\ud83d\udc83`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_0a8e50c12c35da75bd17745dec82c5bc} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(2).at(1)}}>
  {`💃`}
</Text>
  )
}

export function Text_cdb138e02dd9798599393d66714b5f8f () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_b8c319820411a2ae4c6d3383aaeb45bd = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(8),emoji_type:`\ud83c\udf85`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_b8c319820411a2ae4c6d3383aaeb45bd} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(8).at(1)}}>
  {`🎅`}
</Text>
  )
}

export function Text_4f1a64fa933592f2574ba0d2da8ea464 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_62a93fa8adf8f4f341a18aeed9fc6784 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(5),emoji_type:`\ud83d\udc83`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_62a93fa8adf8f4f341a18aeed9fc6784} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(5).at(1)}}>
  {`💃`}
</Text>
  )
}

export function Text_9003fe0096bd6852cb8e122d25b05605 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_e8c9084cb6ad63e98494a7a9a1e268c2 = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(12),emoji_type:`\ud83d\udc83`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_e8c9084cb6ad63e98494a7a9a1e268c2} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(12).at(1)}}>
  {`💃`}
</Text>
  )
}

export function Text_d52dbb4dc123b7d493017acbca215ec0 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_0b1cc91a52da7bfdb3f89ff07985ba7c = useCallback((_e) => addEvents([Event("state.state.reveal_emoji", {emoji:state__state.emoji_list.at(11),emoji_type:`\ud83e\udd73`}),Event("state.state.check_emoji", {})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Text onClick={on_click_0b1cc91a52da7bfdb3f89ff07985ba7c} sx={{"fontSize": "32px", "cursor": "pointer", "transition": "opacity 0.55s ease 0.35s", "opacity": state__state.emoji_list.at(11).at(1)}}>
  {`🥳`}
</Text>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Container sx={{"bg": "#e0e0e0", "height": "100vh", "maxWidth": "auto", "display": "grid", "position": "relative", "overlay": "hidden", "placeItems": "center"}}>
  <VStack spacing={`25px`}>
  <Text sx={{"fontSize": "50px", "fontWeight": "bold", "color": "black"}}>
  {`Memory game with nextpy`}
</Text>
  <Spacer/>
  <VStack spacing={`15px`}>
  <HStack spacing={`15px`}>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_5e4bb45ad379fef09c811233091b20ae/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_ff94acbb041111976b45a0b27264c738/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_95da7747805699c9675dcf7d1b424b6c/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_3a86ccacc61ed19af31a8605dab233b6/>
</Container>
</HStack>
  <HStack spacing={`15px`}>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_ab5c63d7e3e3df8ac1a2ac2af4e61ebb/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_4f1a64fa933592f2574ba0d2da8ea464/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_738730d95000ae48a578038540e540e1/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_ddc1bb33bce01079ba4d9e4348362a4a/>
</Container>
</HStack>
  <HStack spacing={`15px`}>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_cdb138e02dd9798599393d66714b5f8f/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_5b81ed97f4998a5861433bfd9405b009/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_304f49513d7c558c26f75dd64b7fe2b9/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_d52dbb4dc123b7d493017acbca215ec0/>
</Container>
</HStack>
  <HStack spacing={`15px`}>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_9003fe0096bd6852cb8e122d25b05605/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_26532c3bb62bd72f0e41f00f9ba43760/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_7aee5e5527470b0aa5e72ac2594dfa22/>
</Container>
  <Container centerContent={true} sx={{"width": "58px", "height": "58px", "background": "#1e293b", "borderRadius": "6px", "cursor": "pointer"}}>
  <Text_efa3d00d5e25573b08fa58c1e689b1d2/>
</Container>
</HStack>
</VStack>
  <Spacer/>
  <Button_206494fe825da846ac4120a7af6cd933/>
  <Text_301ba2c829842abc0f4c6013c7d77a17/>
</VStack>
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
