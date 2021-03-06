import { Injectable } from "@angular/core";
import { Devices } from "app/models/devices";
import { SpotifyService } from "app/services/spotify.service";
import { User } from "app/models/user";

@Injectable()
export class UserService {
  devices: Devices = new Devices();
  user: User = new User();

  constructor(private spotifyService: SpotifyService) {
    this.loadUser();
    this.loadUserDevices();
  }

  public loadUser() {
    Promise.resolve(
      this.spotifyService.getUser().subscribe(user => {
        this.user = new User().deserialize(user);
      })
    );
  }

  public loadUserDevices() {
    Promise.resolve(
      this.spotifyService.getUserDevices().subscribe(devices => {
        this.devices = new Devices().deserialize(devices);
      })
    );
  }
}
