import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { Neutrino } from "@neutrino/platform";
import { S3 } from "@neutrino/platform/providers/aws/infra"

// Configs
const config = new pulumi.Config();
const orgName = pulumi.getOrganization()
const stackKey = pulumi.getProject()
const stackEnv = pulumi.getStack()

// Defaults
const stackFullName = `${stackKey}-${stackEnv}`

/**
 * Neutrino BaaS
 */
const neutrinoPlatform = new Neutrino(`${stackFullName}`, {
  stackSubDomain: "blackfox",
  platform: {
    disableCluster: true,
    disableContainerCluster: true,
    disableDatabase: true,
    disableFileBucket: true,
    disablePrivateTunnel: true,
  }
});
export const neutrinoPlatformOutput = neutrinoPlatform.platform;