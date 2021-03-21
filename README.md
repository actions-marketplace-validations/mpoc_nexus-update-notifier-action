# Nexus assignment update notifier

Notifies Nexus about an update to an assignment or grader config definition in a GitHub repo.

## Inputs

### `api-endpoint`

**Required** The Nexus API endpoint for the assignment repository update.

## Example usage

```yaml
- name: Nexus assignment update notifier
  uses: mpoc/nexus-update-notifier-action@main
  with:
    api-endpoint: http://192.168.99.1:3000/nexus/assignments/129/edit_from_git_json
```
