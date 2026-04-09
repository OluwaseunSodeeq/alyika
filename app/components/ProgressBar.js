export default function ProgressBar({ progress }) {
    return(
        <div className="w-full bg-green-100 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${sold}%` }}
          />
        </div>

        <p className="text-xs text-gray-500 text-center">
          Sold: {Math.floor((225 * sold) / 37)} copies <br />
          Goal: 600 copies
        </p>
      </div>
    )
}