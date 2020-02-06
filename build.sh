#!/bin/sh

./getTranslations.sh

if [ "$BRANCH" = "master" ]; then
  npm run extract
  curl -u ${LOCO_KEY}: --data-binary @src/locale/en/messages.po https://localise.biz/api/import/po?tag-absent=deprecated
fi

if [ "$NETLIFY_BUILD_BASE" ]; then
  cp -r $NETLIFY_BUILD_BASE/cache/gatsby/.cache .cache
fi

npm rebuild sharp node-sass
gatsby build
