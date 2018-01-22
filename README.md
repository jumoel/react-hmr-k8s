# react-hmr-k8s

Example repo to show how to get React HMR to work in Kubernetes.

Ensure `kubectl` is installed and configured with a proper context.

Run `yarn k8s` to set up and `yarn k8s:stop` to tear down.

View the results at `http://localhost:3000`.

## Limitations

Uses polling instead of filesystem notifications. ([docker/for-mac#2375](https://github.com/docker/for-mac/issues/2375))
