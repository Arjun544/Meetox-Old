String getUser = r'''
  query ($id: String) {
  getUser(id: $id) {
    id
    email
    name
    display_pic
    isPremium
    location
    createdAt
    updatedAt
  }
}
''';

String getNearByUsers = r'''
query ($latitude: Float!, $longitude: Float!, $distanceInKM: Float!){
   getNearByUsers(latitude: $latitude, longitude: $longitude, distanceInKM: $distanceInKM){
    id
    name
    display_pic
    isPremium
    location
    createdAt
    updatedAt
    followers
    followings
   }
}
''';

String isFollowed = r'''
query($id: String!) {
  isFollowed(id: $id)
}
''';

String getUserFollowers = r'''
query($id: String!, $page: Int!, $limit: Int!, $name: String) {
  followers(id: $id, page: $page, limit: $limit, name: $name) {
    page
    nextPage
    prevPage
    hasNextPage
    hasPrevPage
    total_pages
    total_results
    followers
  }
}
''';

String getUserFollowing = r'''
query($id: String!, $page: Int!, $limit: Int!, $name: String) {
  following(id: $id, page: $page, limit: $limit, name: $name) {
    page
    nextPage
    prevPage
    hasNextPage
    hasPrevPage
    total_pages
    total_results
    followings
  }
}
''';

String getNearByFollowers = r'''
query ($latitude: Float!, $longitude: Float!, $distanceInKM: Float!){
   nearByFollowers(latitude: $latitude, longitude: $longitude, distanceInKM: $distanceInKM){
    id
    name
    display_pic
    isPremium
    location
    createdAt
    updatedAt
    followers
    followings
   }
}
''';

String socials = r'''
query ($id: String!) {
  socials(id: $id)
}
''';
