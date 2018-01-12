/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// AIzaSyCC3Sw5QWFniI0yYGZz8XF0l85_mhW85eQ
#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "ReactNativeConfig.h"
#import "RCCManager.h"

@import GoogleMaps;
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  [GMSServices provideAPIKey:@"AIzaSyCYTxilXEV9e0ZtoBbv2tl29_f42Dldbgs"];
  
  // rn-config
  NSDictionary *config = [ReactNativeConfig env];
  // jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
#ifdef DEBUG
  //  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
#else
  jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.backgroundColor = [UIColor whiteColor];
  [[RCCManager sharedInstance] initBridgeWithBundleURL:jsCodeLocation launchOptions:launchOptions];

  //[GMSServices provideAPIKey:@"AIzaSyCC3Sw5QWFniI0yYGZz8XF0l85_mhW85eQ"];
  
  // RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
  //                                                     moduleName:@"movieapp"
  //                                              initialProperties:nil
  //                                                  launchOptions:launchOptions];
  // rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  //
  // self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  // UIViewController *rootViewController = [UIViewController new];
  // rootViewController.view = rootView;
  // self.window.rootViewController = rootViewController;
  // [self.window makeKeyAndVisible];
  return YES;
}

@end
