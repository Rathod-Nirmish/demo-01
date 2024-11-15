import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdCall } from "react-icons/md";
// import "./CarouselComponent2.css";


const CarouselComponent2 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
    { id: 5, content: "Item 5" },
  ];

  return (
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={this.props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            padding: 20,
            margin: 10,
            textAlign: "center",
            border: "1px solid black",
          }}
        >
          {item.content}
          <div>
            <MdCall size={25} />
            <div>Track anytime, anywhere</div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent2;


// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { MdCall } from "react-icons/md";

// const CarouselComponent = () => {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   const items = [
//     { id: 1, content: "Item 1" },
//     { id: 2, content: "Item 2" },
//     { id: 3, content: "Item 3" },
//     { id: 4, content: "Item 4" },
//     { id: 5, content: "Item 5" },
//   ];

//   return (
//     <Carousel responsive={responsive}>
//       {items.map((item) => (
//         <div
//           key={item.id}
//           style={{ padding: 20, margin: 10, textAlign: "center",  border: "1px solid black" }}
//         >
//           {item.content}
//           <div>
//             <MdCall size={25} />
//             <div>Track anytime, anywhere</div>
//           </div>
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default CarouselComponent;
