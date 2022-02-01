//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTVShow {
  constructor(tvTitle, tvEpisodes, isItFinished, durationPerEpisode) {
    this.title = tvTitle;
    this.episodes = tvEpisodes;
    this.finished = isItFinished;
    this.duration = durationPerEpisode;
  }
  introduction() {
    alert("Netflix!!!");
  }
  synopsis() {
    alert(
      `${this.title} is an original TV Show by Netflix with ${
        this.episodes
      } episodes. It ${this.finished ? "finished" : "unfinished"} show with ${
        this.duration
      } minutes each episode.`
    );
  }
  pricing() {
    alert("You can use netflix for $10 per month.");
  }
}

const strangerThings = new NetflixTVShow("Stranger Things", 25, false, 51);
