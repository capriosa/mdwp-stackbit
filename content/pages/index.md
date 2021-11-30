---
title: Home
layout: PageLayout
sections:
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
      - label: Learn more
        altText: Learn more
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
        type: Button
    media:
      type: ImageBlock
      url: /images/hero-1.png
      altText: Hero image
    backgroundImage: {}
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
        borderColor: border-primary
        borderStyle: solid
        borderWidth: 3
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - colors: colors-a
    label: Learn more
    altText: Learn more
    url: /
    showIcon: false
    icon: arrowRight
    iconPosition: right
    style: secondary
    elementId: ''
    type: PopupLink
    body:
      - content/pages/blog/post-four.md
  - colors: colors-b
    altText: Learn more
    url: /
    showIcon: true
    icon: arrowRight
    iconPosition: right
    style: primary
    elementId: ''
    type: PopupLink
    label: Show Popup
    body:
      '0': O
      '1': 'n'
      '2': e
      '3': ' '
      '4': p
      '5': l
      '6': a
      '7': t
      '8': f
      '9': o
      '10': r
      '11': m
      '12': ','
      '13': ' '
      '14': o
      '15': 'n'
      '16': e
      '17': ' '
      '18': c
      '19': o
      '20': m
      '21': m
      '22': u
      '23': 'n'
      '24': i
      '25': t
      '26': 'y'
      '27': ','
      '28': ' '
      '29': g
      '30': e
      '31': t
      '32': t
      '33': i
      '34': 'n'
      '35': g
      '36': ' '
      '37': t
      '38': o
      '39': ' '
      '40': t
      '41': h
      '42': e
      '43': ' '
      '44': b
      '45': o
      '46': t
      '47': t
      '48': o
      '49': m
      '50': ' '
      '51': l
      '52': i
      '53': 'n'
      '54': e
      '55': ' '
      '56': o
      '57': f
      '58': ' '
      '59': e
      '60': v
      '61': e
      '62': r
      '63': 'y'
      '64': t
      '65': h
      '66': i
      '67': 'n'
      '68': g
      '69': ' '
      '70': e
      '71': m
      '72': p
      '73': l
      '74': o
      '75': 'y'
      '76': m
      '77': e
      '78': 'n'
      '79': t
      '80': .
      '81': ' '
      '82': F
      '83': i
      '84': g
      '85': u
      '86': r
      '87': e
      '88': ' '
      '89': o
      '90': u
      '91': t
      '92': ' '
      '93': 'y'
      '94': o
      '95': u
      '96': r
      '97': ' '
      '98': b
      '99': e
      '100': 'n'
      '101': e
      '102': f
      '103': i
      '104': t
      '105': s
      '106': ','
      '107': ' '
      '108': p
      '109': r
      '110': a
      '111': c
      '112': t
      '113': i
      '114': c
      '115': e
      '116': ' '
      '117': f
      '118': o
      '119': r
      '120': ' '
      '121': i
      '122': 'n'
      '123': t
      '124': e
      '125': r
      '126': v
      '127': i
      '128': e
      '129': w
      '130': s
      '131': ','
      '132': ' '
      '133': g
      '134': e
      '135': t
      '136': ' '
      '137': m
      '138': e
      '139': 'n'
      '140': t
      '141': o
      '142': r
      '143': e
      '144': d
      '145': ','
      '146': ' '
      '147': h
      '148': e
      '149': l
      '150': p
      '151': ' '
      '152': p
      '153': e
      '154': e
      '155': r
      '156': s
      '157': ','
      '158': ' '
      '159': g
      '160': e
      '161': t
      '162': ' '
      '163': h
      '164': e
      '165': l
      '166': p
      '167': e
      '168': d
      '169': ' '
      '170': i
      '171': 'n'
      '172': ' '
      '173': r
      '174': e
      '175': t
      '176': u
      '177': r
      '178': 'n'
      '179': .
  - elementId: ''
    colors: colors-a
    title: Testimonials
    subtitle: What our customers say about us
    testimonials:
      - quote: >
          "Very professional team. I loved working with the people at
          startup.io."
        name: Johnna Doe
        title: Product Marketing Manager at Acme
        image:
          type: ImageBlock
          url: /images/carla.jpg
          altText: Photo of Johnna Doe
        styles:
          self:
            margin:
              - mt-0
              - mb-0
            flexDirection: col
          quote:
            textAlign: center
          name:
            textAlign: center
          title:
            textAlign: center
      - quote: >
          "It's great to see someone taking acion while still maintaining a
          sustainable fish supply to home cooks."
        name: Hugh Saturation
        title: Creative at Acme
        image:
          type: ImageBlock
          url: /images/hugh-saturation.jpg
          altText: Photo of Johnna Doe
        styles:
          self:
            margin:
              - mt-0
              - mb-0
            flexDirection: col
          quote:
            textAlign: center
          name:
            textAlign: center
          title:
            textAlign: center
    styles:
      self:
        height: auto
        width: narrow
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
        textAlign: center
      subtitle:
        textAlign: center
    type: TestimonialsSection
  - elementId: ''
    colors: colors-a
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
        borderStyle: dashed
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
      - content/pages/blog/postlayout-9s1at0idp.md
      - content/pages/blog/post-two.md
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
  - elementId: ''
    variant: variant-c
    colors: colors-h
    title: About us
    subtitle: Featured people section example
    actions: []
    people:
      - content/data/team/desmond-eagle.json
      - content/data/team/hugh-saturation.json
      - content/data/team/dianne-ameter.json
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
  - elementId: ''
    colors: colors-h
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
        showIcon: true
        icon: arrowLeft
      - type: Button
        label: Learn More
        url: /
        style: secondary
    media:
      type: ImageBlock
      url: /images/hero-3.jpg
      altText: Hero image
    backgroundImage: {}
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
        flexDirection: col
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
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
      - url: /images/dianne-ameter.jpg
        altText: altText of the image
        caption: Caption of the image
        elementId: ''
        styles:
          self:
            opacity: 100
        type: ImageBlock
    spacing: 1
    columns: 4
    aspectRatio: '16:9'
    imageSizePx: 300
    showCaption: true
    enableHover: true
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
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
        borderStyle: dashed
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
  - body: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Hello Component.
    type: TestimonialCard
    title: Testimonial Card Test
    testimonial: Max W. Mustermannnn
  - colors: colors-h
    elementId: ''
    title: Remote doesn’t mean alone. Here are so great features
    subtitle: >-
      These are all excellent features that will provide exactly the things
      you’re looking for.
    items:
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
      - elementId: ''
        title: Item Title
        subtitle: ''
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        author: ''
        rating: 1
        isRatingVisible: false
        featuredImage:
          type: ImageBlock
          url: >-
            https://assets.stackbit.com/components/images/default/default-image.png
          altText: Item image
        actions: []
        styles:
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
    actions: []
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
    type: FeaturedItemsSection
  - elementId: ''
    colors: colors-f
    title: The Section Title test
    subtitle: The section subtitle
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
        textAlign: center
      text:
        textAlign: center
    type: TextSection
  - elementId: ''
    colors: colors-a
    backgroundImage: {}
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
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-a
    title: Hello World.
    text: >
      One platform, one community, getting to the bottom line of everything
      employment.  Figure out your benefits, practice for interviews, get
      mentored, help peers, get helped in return.
    actions:
      - type: Button
        label: Sign up
        url: 'https://www.stackbit.com/'
        style: primary
        elementId: hero-main-button
    media:
      type: ImageBlock
      url: /images/hero-1.png
      altText: Image alt text
      caption: Image caption
    styles:
      self:
        height: screen
        width: wide
        margin:
          - mt-0
          - mb-11
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pr-4
          - pl-4
        alignItems: flex-end
        justifyContent: flex-end
        flexDirection: col
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - colors: colors-e
    elementId: ''
    title: Remote doesn’t mean alone. Here are so great features
    subtitle: >-
      These are all excellent features that will provide exactly the things
      you’re looking for.
    items:
      - type: FeaturedItem
        title: Faster
        text: >
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          url: /images/faster.svg
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          title:
            textAlign: center
          text:
            textAlign: center
      - type: FeaturedItem
        title: Smarter
        text: >
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          url: /images/smarter.svg
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          title:
            textAlign: center
          text:
            textAlign: center
        isRatingVisible: false
        rating: 4
      - type: FeaturedItem
        title: Focused
        text: >
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          url: /images/focused.svg
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          title:
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
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 2
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: flex-start
    type: FeaturedItemsSection
  - body: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    type: AlertSection
  - colors: colors-h
    elementId: ''
    images:
      - type: ImageBlock
        url: /images/apple.svg
        altText: Apple
        caption: Apple
      - type: ImageBlock
        url: /images/apple.svg
        altText: Google Play
        caption: Google Play
      - type: ImageBlock
        url: /images/playstation.svg
        altText: PlayStation
        caption: PlayStation
      - type: ImageBlock
        url: /images/gatsby.svg
        altText: Gatsby
        caption: Gatsby
      - type: ImageBlock
        url: /images/xbox.svg
        altText: Xbox
        caption: Xbox
      - type: ImageBlock
        url: /images/skype.svg
        altText: Skype
        caption: Skype
      - type: ImageBlock
        url: /images/zcool.svg
        altText: ZCOOL
        caption: ZCOOL
    spacing: 3
    columns: 7
    aspectRatio: auto
    showCaption: false
    enableHover: false
    styles:
      self:
        width: wide
        height: auto
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-36
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        textAlign: center
    imageSizePx: 240
    type: MediaGallerySection
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
  - elementId: ''
    colors: colors-f
    title: Where did everyone go?
    text: >
      Learn how top tech companies have learned working remote using our
      product.
    actions:
      - type: Button
        label: Sign Up
        url: /
        style: secondary
      - type: Link
        label: Watch Video
        url: /
        showIcon: true
        icon: arrowRight
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-20
          - mb-20
          - ml-20
          - mr-20
        padding:
          - pt-28
          - pb-28
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
    media:
      url: /images/hero-3.jpg
      altText: Where did everyone go?
      caption: Team meeting
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
  - elementId: ''
    colors: colors-a
    title: 'A great feature, we’re proud of'
    text: >
      Share WIP, comment on each other’s work, approve what’s ready to go, ship
      together
    media:
      type: ImageBlock
      url: /images/Image-on-the-right.svg
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-36
          - pb-6
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderColor: border-primary
        borderWidth: 0
        borderStyle: solid
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - elementId: ''
    colors: colors-a
    title: And a strong value proposition
    text: >
      Share WIP, comment on each other’s work, approve what’s ready to go, ship
      together
    media:
      type: ImageBlock
      url: /images/Image-on-the-left.svg
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-6
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - elementId: ''
    colors: colors-a
    text: >+
      ## “We sometimes write things. You should read it, it might shed some
      light on why we’re doing what we’re doing”

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
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: center
      text:
        textAlign: left
    type: TextSection
  - elementId: ''
    variant: variant-b
    colors: colors-a
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
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedPostsSection
  - colors: colors-f
    elementId: ''
    title: Need Answers?
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
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
    type: FaqSection
  - elementId: ''
    colors: colors-a
    testimonials:
      - quote: >
          ## Such a great experience to be using this product. It really helped
          with what I needed help with.
        name: Carla Rogers
        title: Happy customer
        image:
          type: ImageBlock
          url: /images/carla.jpg
          altText: Photo of Isabelle Parks
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
    type: TestimonialsSection
  - type: ContactSection
    colors: colors-f
    title: Get early access
    text: >
      Sign up your team today to be the first to try out our new product to
      increae your team’s productivity
    form:
      type: FormBlock
      elementId: contact-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: email
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
      submitLabel: Sign Up
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
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      text:
        textAlign: left
---
