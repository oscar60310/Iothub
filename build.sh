rm -rf ./dist
yarn build
docker build -t=oscar60310/iot-hub .