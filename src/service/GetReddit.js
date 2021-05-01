// get reddit threads using sub reddit API with default set to worldnews

export async function getArticles(subname = "worldnews") {
  try {
    const results = await fetch(
      `https://www.reddit.com/r/${subname}.json?limit=50&?sort=new&t=all`
    )
      .then((res) => res.json())
      .then((json) => {
        return json.data.children;
      });

    return results;
  } catch (err) {
    alert("error in fetching");
    console.log("error", err);
  }
}
