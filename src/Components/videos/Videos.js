export default function Videos() {
  //console.log(window.location.pathname) // "videos/hamsters"
  //test for search term "ilike/tonap" returns error.
  //Error message must return *before* gets to this stage.
  console.log(window.location.pathname);
  console.log(window.location.pathname.slice(8));

  return(<div></div>);
}