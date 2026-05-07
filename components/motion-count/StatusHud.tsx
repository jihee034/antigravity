import type { CameraPermissionState, CameraStreamState, GestureType, InteractionMode, TrackingState } from './types'

function toTrackingLabel(s: TrackingState) {
  const map: Record<TrackingState, string> = { idle:'대기', requesting_permission:'권한 요청', ready:'준비 완료', denied:'권한 차단', interrupted:'연결 끊김', unsupported:'지원 안 됨', error:'오류' }
  return map[s] ?? '알 수 없음'
}
function toPermissionLabel(s: CameraPermissionState) {
  const map: Record<CameraPermissionState, string> = { granted:'권한 허용', prompt:'권한 대기', denied:'권한 차단', unsupported:'권한 조회 미지원', unknown:'권한 미확인' }
  return map[s] ?? '권한 미확인'
}
function toStreamLabel(s: CameraStreamState) {
  const map: Record<CameraStreamState, string> = { live:'스트림 정상', muted:'스트림 일시 중단', ended:'스트림 종료', inactive:'스트림 없음' }
  return map[s] ?? '스트림 없음'
}
function toGestureLabel(g: GestureType) {
  const map: Record<GestureType, string> = { open_palm:'펼친 손', fist:'주먹', victory:'브이', heart:'하트', none:'없음' }
  return map[g] ?? '없음'
}
function toFieldLabel(energy: number, swirl: number) {
  if (energy > 0.72) return '폭발'
  if (swirl > 0.56) return '와류'
  if (energy > 0.42) return '활성'
  return '부유'
}

interface StatusHudProps {
  modelReady: boolean
  trackingState: TrackingState
  permissionState: CameraPermissionState
  streamState: CameraStreamState
  isCameraActive: boolean
  handDetected: boolean
  gesture: GestureType
  rawDetectionCount: number
  videoResolution: { width: number; height: number }
  lastInferenceDurationMs: number
  sendCount: number
  resultCount: number
  debugState: string
  mode: InteractionMode
  fingerCount: number
  countValue: number
  countdownBurst: boolean
  energy: number
  swirl: number
}

export function StatusHud(props: StatusHudProps) {
  const intensity = Math.round(props.energy * 100)
  return (
    <section className="status-hud" aria-label="실시간 상태">
      <div className="status-hud__row">
        <div className="status-hud__item"><span className="status-hud__label">Camera</span><strong>{props.isCameraActive ? 'On' : 'Off'}</strong></div>
        <div className="status-hud__item"><span className="status-hud__label">Hand</span><strong>{props.handDetected ? 'Detected' : 'Searching'}</strong></div>
        <div className="status-hud__item"><span className="status-hud__label">Gesture</span><strong>{toGestureLabel(props.gesture)}</strong></div>
        <div className="status-hud__item"><span className="status-hud__label">Points</span><strong>{props.rawDetectionCount}</strong></div>
        <div className="status-hud__item">
          <span className="status-hud__label">{props.mode === 'count' ? 'Count' : props.mode === 'countdown' ? 'Countdown' : 'Field'}</span>
          <strong>{props.mode === 'count' ? props.fingerCount : props.mode === 'countdown' ? (props.countdownBurst ? 'Burst' : props.countValue) : toFieldLabel(props.energy, props.swirl)}</strong>
        </div>
      </div>
      <p className="status-hud__meta">
        {props.mode === 'count' ? 'Count mode' : props.mode === 'countdown' ? (props.countdownBurst ? 'Countdown mode · burst' : 'Countdown mode · 0-5') : `Flow mode · intensity ${intensity}`} · {props.modelReady ? 'Model loaded' : 'Model loading'} · {toTrackingLabel(props.trackingState)} · {toPermissionLabel(props.permissionState)} · {toStreamLabel(props.streamState)} · {props.videoResolution.width}×{props.videoResolution.height}
      </p>
    </section>
  )
}
