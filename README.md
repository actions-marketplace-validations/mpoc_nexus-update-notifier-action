# Nexus assignment update notifier

Notifies Nexus about an update to an assignment or grader config definition in a GitHub repo.

## Inputs

### `nexus-url`

**Required** Nexus URL (including http://).
  
### `assignment-id`

**Required** The ID of the assignment which should receive the update.

## Example usage

```yaml
- name: Nexus assignment update notifier
  uses: mpoc/nexus-update-notifier-action@main
  with:
    nexus-url: http://192.168.99.1:3000
    assignment-id: 115
```
