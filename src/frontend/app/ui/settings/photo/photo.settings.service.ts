import { Injectable } from '@angular/core';
import { NetworkService } from '../../../model/network/network.service';
import { SettingsService } from '../settings.service';
import { AbstractSettingsService } from '../_abstract/abstract.settings.service';
import { ServerPhotoConfig } from '../../../../../common/config/private/PrivateConfig';
import { ClientPhotoConfig } from '../../../../../common/config/public/ClientConfig';

@Injectable()
export class PhotoSettingsService extends AbstractSettingsService<ServerPhotoConfig> {
  constructor(
    private networkService: NetworkService,
    settingsService: SettingsService
  ) {
    super(settingsService);
  }

  public updateSettings(settings: ServerPhotoConfig): Promise<void> {
    return this.networkService.putJson('/settings/photo', { settings });
  }
}
