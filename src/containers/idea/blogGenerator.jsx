import React from "react";
import jQuery from 'jquery';







export default function BlogGenerator(props) {
  const source = props.source;
  const title = source.split("/").slice(-1)[0].split(".")[0];

  let rawFile = new XMLHttpRequest();
  rawFile.open("GET", source, false);
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status === 0)
      {
        let allText = rawFile.responseText;
        console.log(allText);
      }
    }
  };
  rawFile.send(null);



  return (
    <div>K

    </div>
  )
}
