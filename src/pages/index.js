import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="2021-02-13"
          title="testtest"
          except="LoremLorem"
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
