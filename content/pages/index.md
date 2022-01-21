---
title: Home
sections:
  - colors: colors-a
    quote: |-
      “It’s great to see someone taking action while still maintaining a
      sustainable fish supply to home cooks.”
    name: Johnna Doe
    title: Product Marketing Manager at Acme
    backgroundImage:
      url: 'https://assets.stackbit.com/components/images/default/bg.jpg'
      altText: Product Marketing Manager Quote
      styles:
        self:
          opacity: 100
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      quote:
        textAlign: left
      name:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      title:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
    type: QuoteSection
  - backgroundImage:
      url: 'https://assets.stackbit.com/components/images/default/default-image.png'
      altText: altText of the image
      caption: Caption of the image
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    colors: colors-a
    title: The Section Title
    subtitle: ''
    text: >-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
    type: TextSection
  - backgroundImage:
      url: 'https://assets.stackbit.com/components/images/default/default-image.png'
      altText: altText of the image
      caption: Caption of the image
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    colors: colors-f
    title: The Section Title
    subtitle: The section subtitle
    styles:
      self:
        height: auto
        width: full
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: flex-start
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      text:
        textAlign: center
    type: CodeSection
    text: >-
      //CodeWidgetComponent.js - Hier wird die React-Komponente importiert und
      im Scrivito Widget aufgerufen

      import * as React from 'react';

      import * as Scrivito from 'scrivito';

      import Highlight from 'react-highlight';

      import InPlaceEditingPlaceholder from
      '../../Components/InPlaceEditingPlaceholder';


      Scrivito.provideComponent('CodeWidget', ({ widget }) => {

      const code = widget.get('text')
        
      if (!code.length) {
          return (
            <InPlaceEditingPlaceholder center={ true }>
              Select blocks in the widget properties.
            </InPlaceEditingPlaceholder>
          );
        }

        return (
          <div>
          <Highlight className='javascript'>
           {code}
          </Highlight>
          </div>
        );
      });
  - elementId: ''
    colors: colors-a
    title: Love where you work
    subtitle: ''
    text: >-
      One platform, one community, getting to the bottom line of everything
      employment.  Figure out your benefits, practice for interviews, get
      mentored, help peers, get helped in return.
    actions:
      - type: Button
        label: Sign Up
        url: /
        style: primary
    media:
      type: ImageBlock
      url: /images/hero-1.png
      altText: Hero image
    backgroundImage: null
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - backgroundImage:
      url: 'https://assets.stackbit.com/components/images/default/default-image.png'
      altText: altText of the image
      caption: Caption of the image
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    variant: variant-c
    colors: colors-h
    title: Featured
    subtitle: Featured blog posts section example
    actions:
      - type: Button
        label: View All
        altText: View All Posts
        url: /blog
        style: primary
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/postlayout-9s1at0idp.md
      - content/pages/blog/post-one.md
    showDate: false
    showAuthor: false
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedPostsSection
  - colors: colors-a
    elementId: ''
    type: GridCard
    styles:
      self:
        width: wide
        justifyContent: center
        flexDirection: row
        height: auto
  - name: lorem-ipsum
    job: lorem-ipsum
    location: lorem-ipsum
    description: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    button: lorem-ipsum
    facebook: lorem-ipsum
    twitter: lorem-ipsum
    github: lorem-ipsum
    unsplash: lorem-ipsum
    dribbble: lorem-ipsum
    instagram: lorem-ipsum
    youtube: lorem-ipsum
    type: ProfileCard
  - colors: colors-a
    elementId: ''
    accordions:
      - Question 1
      - Question 2
      - Question 3
      - 'Question 4 '
    items:
      - >-
        Mollit culpa amet dolore consequat enim ut esse. Veniam nostrud amet sit
        do fugiat in veniam adipisicing dolore. 

        Qui consequat ut mollit eiusmod deserunt laborum occaecat laboris. 

        Dolor sit irure dolor qui officia anim qui culpa elit pariatur quis
        velit. Nostrud irure exercitation eu id.
      - >-
        Nostrud pariatur tempor irure incididunt in. Aute elit esse ad laborum. 

        Pariatur officia deserunt non enim esse fugiat esse exercitation. 

        Reprehenderit eiusmod veniam qui do laborum adipisicing culpa cillum
        irure amet.
      - >-
        Aliqua laboris veniam minim velit elit enim officia. 

        Cupidatat anim reprehenderit sint veniam officia elit Lorem cillum irure
        aute dolore. 

        Officia incididunt proident eu laboris eiusmod officia ipsum laboris
        occaecat minim pariatur dolor ut.
      - >-
        Elit aute ipsum Lorem aute nostrud veniam exercitation irure eiusmod. 

        Aute laborum adipisicing sunt duis nulla incididunt ipsum eu voluptate
        ad velit. 

        Esse qui Lorem commodo id laboris. Et ea duis in sint amet cillum
        fugiat.
    type: Accordions
  - elementId: ''
    variant: variant-c
    colors: colors-h
    title: About us
    subtitle: Featured people section example
    actions: []
    people:
      - content/data/team/desmond-eagle.json
      - content/data/team/hilary-ouse.json
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedPeopleSection
  - colors: colors-a
    body: >-
      One platform, one community, getting to the bottom line of everything
      employment.  Figure out your benefits, practice for interviews, get
      mentored, help peers, get helped in return.
    label: Infos
    altText: Learn more
    url: Schliessen
    showIcon: true
    icon: arrowRight
    iconPosition: right
    style: secondary
    elementId: ''
    type: PopupLink
    title: Popup Titel
    close: Schliessen
  - colors: colors-a
    elementId: ''
    tabs:
      - Tab 1
      - Tab 2
      - Tab 3
    item:
      - >-
        Elit sit minim dolore ut. Excepteur veniam ipsum duis qui id sit
        reprehenderit. 

        Aliquip nostrud eiusmod nisi amet ea reprehenderit proident occaecat
        irure excepteur commodo ullamco. 

        Dolor aliquip nulla nisi magna cillum officia exercitation officia Lorem
        do do labore. 

        Ex nisi ea ad aute duis velit labore sit magna enim voluptate Lorem. 

        Do aliquip et magna laborum nisi. Mollit est nostrud in aliqua sint.
      - >-
        Sint adipisicing adipisicing laborum eiusmod deserunt consequat nisi
        deserunt adipisicing anim in laborum ad do. 

        Eu non minim dolor anim ex. Lorem aliqua laborum fugiat irure culpa
        minim amet ipsum ipsum labore. 

        Sunt voluptate minim consectetur elit enim cillum eu dolor eiusmod
        commodo.
      - >-
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
    type: Tabs
  - elementId: ''
    variant: variant-b
    colors: colors-h
    title: Featured
    subtitle: Featured blog posts section example
    actions:
      - type: Button
        label: View All
        altText: View All Posts
        url: /blog
        style: primary
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
      - content/pages/blog/post-four.md
    showDate: false
    showAuthor: false
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedPostsSection
  - colors: colors-a
    elementId: ''
    title: Gallery
    subtitle: This is the subtitle
    images:
      - type: ImageBlock
        url: 'https://assets.stackbit.com/components/images/default/image-1.jpeg'
        altText: Image one
        caption: Image one caption
      - type: ImageBlock
        url: 'https://assets.stackbit.com/components/images/default/image-2.jpeg'
        altText: Image two
        caption: Image two caption
      - type: ImageBlock
        url: 'https://assets.stackbit.com/components/images/default/image-3.jpeg'
        altText: Image three
        caption: Image three caption
      - type: ImageBlock
        url: 'https://assets.stackbit.com/components/images/default/image-4.jpeg'
        altText: Image four
        caption: Image four caption
    spacing: 1
    columns: 2
    aspectRatio: '1:1'
    imageSizePx: 300
    showCaption: true
    enableHover: true
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
  - elementId: ''
    variant: variant-b
    colors: colors-f
    title: Latest news
    subtitle: Latest blog posts section example
    actions:
      - type: Button
        label: View All
        altText: View All Posts
        url: /blog
        style: primary
    showRecent: true
    recentCount: 3
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: PostFeedSection
  - title: lorem-ipsum
    body: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    testimonial: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    type: TestimonialCard
  - elementId: ''
    colors: colors-a
    title: The Section Title
    subtitle: ''
    text: >-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    styles:
      self:
        height: screen
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
    type: TextSection
  - type: HeroSection
    colors: colors-a
    title: 'Love where you work, because work loves you'
    text: >-
      One platform, one community, getting to the bottom line of everything
      employment.  Figure out your benefits, practice for interviews, get
      mentored, help peers, get helped in return.
    media:
      type: ImageBlock
      url: 'https://assets.stackbit.com/components/images/default/hero.png'
      altText: Hero section image
    actions:
      - type: Button
        label: Sign up
        url: /
        style: secondary
        buttonPosition: center
        showIcon: true
        icon: cart
    styles:
      self:
        height: screen
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-4
          - pb-4
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: HeroSection
    colors: colors-h
    title: Where did everyone go?
    text: >-
      Learn how top tech companies have learned working remote using our
      product.
    media:
      type: ImageBlock
      url: /images/hero-3.jpg
      caption: Team meeting
      altText: Where did everyone go?
    actions:
      - type: Button
        label: Sign up
        url: /
        style: primary
        buttonPosition: left
      - type: Button
        label: Watch Video
        url: /
        style: link
        showIcon: true
        icon: arrowRight
        buttonPosition: right
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - elementId: ''
    colors: colors-a
    backgroundImage: null
    title: Let's do this
    text: >-
      The Stackbit theme is flexible and scalable to every need. It can manage
      any layout and any screen.
    actions:
      - type: Button
        label: Try it now
        url: /
        style: primary
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: CtaSection
  - type: FeaturedItemsSection
    colors: colors-i
    title: Remote doesn’t mean alone. Here are so great features
    subtitle: >-
      These are all excellent features that will provide exactly the things
      you’re looking for.
    items:
      - type: FeaturedItem
        title: Faster
        text: >-
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          type: ImageBlock
          url: /images/faster.svg
          altText: Item image
        styles:
          title:
            textAlign: center
          subtitle:
            textAlign: center
          text:
            textAlign: center
      - type: FeaturedItem
        title: Smarter
        text: >-
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          type: ImageBlock
          url: /images/smarter.svg
          altText: Item image
        styles:
          title:
            textAlign: center
          subtitle:
            textAlign: center
          text:
            textAlign: center
      - type: FeaturedItem
        title: Focused
        text: >-
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          type: ImageBlock
          url: /images/focused.svg
          altText: Item image
        styles:
          title:
            textAlign: center
          subtitle:
            textAlign: center
          text:
            textAlign: center
    columns: 3
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
  - type: HeroSection
    colors: colors-a
    title: 'A great feature, we’re proud of'
    text: >-
      Share WIP, comment on each other’s work, approve what’s ready to go, ship
      together
    media:
      type: ImageBlock
      url: /images/hero-2.png
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: HeroSection
    colors: colors-a
    title: And a strong value proposition
    text: >-
      Share WIP, comment on each other’s work, approve what’s ready to go, ship
      together
    media:
      type: ImageBlock
      url: /images/hero-2.png
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: TextSection
    colors: colors-a
    title: ''
    text: >
      ## We sometimes write things. You should read it, it might shed some 
      light on why we’re doing what we’re doing


      [See all posts](/blog)
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-22
          - pb-0
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
  - type: FeaturedPostsSection
    variant: variant-b
    colors: colors-a
    title: ''
    subtitle: ''
    posts:
      - content/pages/blog/post-four.md
      - content/pages/blog/post-three.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
  - type: FaqSection
    colors: colors-h
    title: Need Answers?
    subtitle: ''
    items:
      - question: How it this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How it this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
      - question: How it this different from what we have today?
        answer: >-
          At the office, working together is often a distruction, on remote, it
          could be motivation, At the office, working together is often a
          distruction, on remote, it could be motivation, At the office, working
          together is often a distruction, on remote, it could be motivation
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
  - type: TestimonialsSection
    colors: colors-a
    title: ''
    subtitle: ''
    testimonials:
      - quote: >
          > *Such a great experience to be using this product. It really helped
          with what I needed help with.*
        name: Carla Rogers
        title: Happy customer
        image:
          type: ImageBlock
          url: /images/carla.jpg
          altText: Photo of Carla Rogers
        styles:
          self:
            margin:
              - mt-0
              - mb-0
            flexDirection: row-reverse
          quote:
            textAlign: left
          name:
            textAlign: left
          title:
            textAlign: left
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
  - type: ContactSection
    colors: colors-f
    title: Get early access
    text: >-
      Sign up your team today to be the first to try out our new product to
      increase your team's productivity.
    form:
      type: FormBlock
      elementId: sign-up-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: EmailFormControl
          name: email
          placeholder: Your email
          isRequired: 'true'
          width: full
      submitLabel: Sign Up
    media: null
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
layout: PageLayout
---
